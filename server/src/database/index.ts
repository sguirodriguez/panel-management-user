import { PrismaClient } from '@prisma/client';

const database = new PrismaClient({ log: ['query'] });

export { database };