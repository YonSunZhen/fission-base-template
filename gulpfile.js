/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const ts = require('gulp-typescript');
const alias = require('gulp-ts-alias');
const sourcemaps = require('gulp-sourcemaps');
const zip = require('gulp-zip');
const del = require('del');
const fs = require('fs');
const path = require('path');

const project_name = JSON.parse(fs.readFileSync('./package.json')).name;

const ts_project = ts.createProject('tsconfig.json');

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
  return  gulp.src(['dist/output/**', '.npmrc'], { allowEmpty: true })
    .pipe(zip(`${project_name}.zip`))
    .pipe(gulp.dest('./dist'));
}

exports.default = gulp.series(clean_dist, build_ts, copy_assets, pack_dist);