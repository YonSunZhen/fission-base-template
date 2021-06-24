const defaultConfig = {
  db: {
    host: '/xxx/xxx/xxx/host',
    port: '/xxx/xxx/xxx/port',
    username: '/xxx/xxx/xxx/username',
    password: '/xxx/xxx/xxx/password'
  }
};

const testConfig = {
  db: {
    host: `${__dirname}/test/host`,
    port: `${__dirname}/test/port`,
    username: `${__dirname}/test/username`,
    password: `${__dirname}/test/password`
  }
};

let config;

if (process.env.NODE_ENV === 'testing') {
  config = testConfig;
} else {
  config = defaultConfig;
}

export default config;
