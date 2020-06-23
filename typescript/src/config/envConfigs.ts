const settings = {
  nodeENV: process.env.NODE_ENV || 'production',
  logLevel: process.env.LOG_LEVEL || 'info',
  database: {
    url: process.env.DB_URI,
  },
  server: {
    port: parseInt(process.env.PORT || '3000'),
    enableTLS: process.env.TLS === 'enable',
    key: process.env.TLS_KEY,
    cert: process.env.TLS_CERT,
    ca: process.env.TLS_CA,
  },
  stackProfiler: {
    enable: process.env.STACK_PROFILER === 'enable',
  },
};

export default settings;
