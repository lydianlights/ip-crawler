import dotenv from 'dotenv';

process.env.NODE_ENV = (process.env.NODE_ENV || '').trim();
if (process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: './.test.env'
  });
}
else {
  dotenv.config({
    path: './.env'
  });
}
