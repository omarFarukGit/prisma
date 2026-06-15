import { prisma } from "./lib/prisma";

async function main() {
  // Create a new user with a post
  const user = await prisma.user.createMany({
    data: [
      {
        name: "raju",
        email: "raju@gmail.com",
      },
      {
        name: "noyon",
        email: "noyon@gmail.com",
      },
      {
        name: "hamim",
        email: "hamim@gmail.com",
      },
    ],
  });
  console.log("Created user:", user);

  // Fetch all users with their post
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
