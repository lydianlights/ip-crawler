import dotenv from 'dotenv';
import { Client } from 'pg';

export class DB {
  private static _client: Client;

  static async init() {
    this._client = new Client();
    await this._client.connect();
  }

  static async close() {
    this._client.end();
  }

  static async recordCheckedIP(ip: string) {
    try {
      await this._client.query('INSERT INTO checked_ips (ip_address) VALUES ($1);', [ip]);
    }
    catch (err) {
      // console.error(err);
      return;
    }
  }
  
  static async recordValidIP(ip: string, title: string) {
    try {
      await this._client.query('INSERT INTO valid_ips (ip_address, html_title) VALUES ($1, $2);', [ip, title]);
    }
    catch (err) {
      // console.error(err);
      return;
    }
  }
}
