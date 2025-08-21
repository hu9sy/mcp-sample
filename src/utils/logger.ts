import pino from 'pino';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

const isProduction = process.env.NODE_ENV === 'production';

export const logger = pino({
  level: isProduction ? 'error' : 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      destination: 1,
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
      ignore: 'pid,hostname',
      singleLine: true,
    },
  },
});

