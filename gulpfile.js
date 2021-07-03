/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const logger = require('gulplog');
const ts = require('gulp-typescript');
const alias = require('gulp-ts-alias');
const sourcemaps = require('gulp-sourcemaps');
const zip = require('gulp-zip');
const del = require('del');
const fs = require('fs');
const promisify = require('util').promisify;
const exec = require('child_process').exec;
const path = require('path');


const ts_project = ts.createProject('tsconfig.json');
const dm = JSON.parse(fs.readFileSync('./devminus.json'));

const DM_DIST_PATH = './dist';
const DM_TMP_PATH = `${DM_DIST_PATH}/output`;
const DM_MODULE = dm.module;
const DM_PKG_NAME = `${DM_MODULE}.zip`;
const DM_PKG_PATH = `${DM_DIST_PATH}/${DM_PKG_NAME}`;
const DM_FUNCTIONS = dm.functions;


function clean_dist() {
  return del(['dist']);
}

function build_ts() {

  return ts_project.src()
    .pipe(alias({ configuration: ts_project.config }))
    .pipe(sourcemaps.init())
    .pipe(ts_project()).js
    .pipe(sourcemaps.write({ sourceRoot: file => path.relative(path.join(file.cwd, file.path), file.base) }))
    .pipe(gulp.dest('dist/output'));
}

function copy_assets() {
  return gulp.src(['package.json', '.npmrc'], { allowEmpty: true, base: '.' })
    .pipe(gulp.dest('dist/output'));
}


function pack_dist() {
  return  gulp.src([`${DM_TMP_PATH}/**`, '.npmrc'], { allowEmpty: true })
    .pipe(zip(`${DM_MODULE}.zip`))
    .pipe(gulp.dest(DM_DIST_PATH));
}

async function deploy_pkg() {
  try {
    await promisify(exec)(`fission-cli pkg info --name ${DM_MODULE}`);
    try {
      const res = await promisify(exec)(`fission-cli pkg update --env nodejs --force \
        --src ${DM_PKG_PATH} \
        --name ${DM_MODULE}`);
      logger.info(res.stdout.slice(0, res.stdout.length - 1));
    } catch (err) {
      logger.info(err);
    }
  } catch (err) {
    try {
      const res = await promisify(exec)(`fission-cli pkg create --env nodejs \
        --src ${DM_PKG_PATH} \
        --name ${DM_MODULE}`);
      logger.info(res.stdout.slice(0, res.stdout.length - 1));
    } catch (err) {
      logger.info(err);
    }
  }
}

async function deploy_fn(fn) {
  try {
    await promisify(exec)(`fission-cli fn getmeta --name ${fn.name}`);
    try {
      const res = await promisify(exec)(`fission-cli fn update --env nodejs  --force \
        --pkg ${DM_MODULE} \
        --name ${fn.name} \
        --entrypoint ${fn.entry} \
        ${fn.configmap ? '--configmap ' + fn.configmap : ''} \
        ${fn.keepalive ? '--executortype newdeploy' : '--executortype poolmgr'}`);
      logger.info(res.stdout.split('\n')[1]);
    } catch (err) {
      logger.info(err);
    }
  } catch (err) {
    try {
      const res = await promisify(exec)(`fission-cli fn create --env nodejs \
        --pkg ${DM_MODULE} \
        --name ${fn.name} \
        --method ${fn.method ? fn.method : 'GET'} \
        --entrypoint ${fn.entry} \
        ${fn.configmap ? '--configmap ' + fn.configmap : ''} \
        ${fn.keepalive ? '--executortype newdeploy' : '--executortype poolmgr'}`);
      logger.info(res.stdout.slice(0, res.stdout.length - 1));
    } catch (err) {
      logger.info(err);
    }
  }

  try {
    await promisify(exec)(`fission-cli fn getmeta --name ${fn.name}`);
  } catch (err) {
    logger.info(err);
  }

  if (fn.url) {
    try {
      await promisify(exec)(`fission-cli ht get --name ${fn.name}`);
      try {
        const res = await promisify(exec)(`fission-cli ht update \
          --name ${fn.name} \
          --function ${fn.name} \
          --url ${fn.url} \
          --method ${fn.method ? fn.method : 'GET'}`);
        logger.info(res.stdout.slice(0, res.stdout.length - 1));
      } catch (err) {
        logger.info(err);
      }
    } catch (err) {
      try {
        const res = await promisify(exec)(`fission-cli ht create \
          --name ${fn.name} \
          --function ${fn.name} \
          --url ${fn.url} \
          --method ${fn.method ? fn.method : 'GET'}`);
        logger.info(res.stdout.slice(0, res.stdout.length - 1));
      } catch (err) {
        logger.info(err);
      }
    }
  }

  if (fn.cron) {
    try {
      const res = await promisify(exec)(`fission-cli tt create \
        --name ${fn.name} \
        --function ${fn.name} \
        --cron "${fn.cron}"`);
      res.stdout.split('\n').filter((log) => log.length).forEach((log) => logger.info(log));
    } catch (err) {
      if (!err.stderr.indexOf('already exists')) {
        logger.info(err.stderr.slice(1, err.stderr.length - 2));
      } else {
        try {
          const res = await promisify(exec)(`fission-cli tt update \
            --name ${fn.name} \
            --function ${fn.name} \
            --cron "${fn.cron}"`);
          res.stdout.split('\n').filter((log) => log.length).forEach((log) => logger.info(log));
        } catch (err) {
          logger.info(err);
        }
      }     
    }
  }
}

async function deploy_fns() {
  for (const fn of DM_FUNCTIONS) {
    await deploy_fn(fn);
  }
}

exports.default = gulp.series(clean_dist, build_ts, copy_assets, pack_dist);

exports.clean = clean_dist;

exports.build = gulp.series(build_ts, copy_assets);

exports.pack = pack_dist;

exports.deploy =  gulp.series(deploy_pkg, deploy_fns);