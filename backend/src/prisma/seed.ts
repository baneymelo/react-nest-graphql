/* eslint-disable prettier/prettier */
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'user',
            email: 'user@email.com',
            password: '1234',
            characters: {
                create: [{
                    name: 'Rick Sanchez',
                    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                    species: 'Human',
                    gender: 'Male',
                }]
            }
        }
    })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });