import fs from 'fs';

export class Log {
  static async writeData(ip: string, title: string) {
    const path = process.env.LOG_PATH;
    const file = process.env.LOG_FILE;
    const data = `${ip.padEnd(15, ' ')}    ${title}\n`;
    return new Promise((resolve, reject) => {
      fs.mkdir(`${path}`, (err) => {
        if (err.code !== 'EEXIST') {
          reject(err);
          return;
        }
        fs.appendFile(`${path}/${file}`, data, (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });
      });
    });
  }
}
