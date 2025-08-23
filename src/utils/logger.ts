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
      /**
       * NOTE: stdioベースのmcpサーバはJSON-RPCで標準出力を使用しているため
       *       ログ出力先は標準エラーを指定
       * @see https://modelcontextprotocol.io/quickstart/server#logging-in-mcp-servers-2
       */
      destination: 2,
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
      ignore: 'pid,hostname',
      singleLine: true,
    },
  },
});
