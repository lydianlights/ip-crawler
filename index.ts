import { DB } from './lib/psql';
import { queryIP, randomIP } from './lib/ip-checker';

main();

async function main() {
  console.log("Initializing...");
  await DB.init();
  while (true) {
    await queryIP(randomIP());
  } 
}
