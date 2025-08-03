import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

// CREATE
// await prisma.user.create({
//   data: { name: "Ked", email: "ked@example.com" },
// });

// READ
// const users = await prisma.user.findMany();

// UPDATE
await prisma.user.update({
  where: { id: 2 },
  data: { name: "Ked Updated" },
});

// DELETE
// await prisma.user.delete({
//   where: { id: 1 },
// });
