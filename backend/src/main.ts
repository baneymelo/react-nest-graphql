/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { prisma } from "./db";

async function main() {
  await prisma.$connect();
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
main();
