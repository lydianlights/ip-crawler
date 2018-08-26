import { DB } from './lib/psql';
import { queryIP } from './lib/ip-checker';

const ip = process.argv[2];
if (ip) {
  test(ip);
}
else {
  console.error("No ip specified!");
}

async function test(ip: string) {
  console.log("Initializing...");
  await DB.init();
  await queryIP(ip);
  // await DB.close(); // TODO: Wait for query to finish
}
