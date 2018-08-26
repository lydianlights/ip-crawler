import request from 'request-promise-native';
import cheerio from 'cheerio';
import { clean } from './string-helpers';
import { DB } from './psql';
import { Log } from './logger';

export async function queryIP(ip: string) {
  return new Promise((resolve, reject) => {
    console.log(`Checking ${ip}...`);
    DB.recordCheckedIP(ip);
    request.get(`http://${ip}`, { timeout: 500 })
      .then(res => {
        console.log("Hit!");
        readHtml(res, ip);
        resolve();
      })
      .catch(err => {
        console.log("No response.");
        resolve();
      });
  });
}

async function readHtml(res: any, ip: string) {
  const $ = cheerio.load(res);
  const rawTitle = $('title').first().html();
  const title = clean(rawTitle);
  await Promise.all([
    DB.recordValidIP(ip, title),
    Log.writeData(ip, title),
  ]);
  return;
}

export function randomIP() {
  const a = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);
  const c = Math.floor(Math.random() * 128);
  const d = Math.floor(Math.random() * 128);
  return `${a}.${b}.${c}.${d}`;
}
