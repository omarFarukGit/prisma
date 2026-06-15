import express, { Request, Response } from "express";
import { prisma } from "./lib/prisma";
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/users", async (_, res) => {
  const userFirst = await prisma.user.findFirst();
  const userFrisrtTrow = await prisma.user.findFirstOrThrow();
  const userMany = await prisma.user.findMany();
  const userUnique = await prisma.user.findUnique({ where: { id: 5 } });
  const name = await prisma.user.findMany({
    where: { name: { in: ["sinan", "sakin"] } },
  });
  res.json(name);
});

app.put('/users',async(_,res)=>{
  const updateUser=await prisma.user.update({
    where:{email:'sinan@gmail.com'},
    data:{
      name:'si9an'
    }
  })
  res.json(updateUser)
})

app.delete('/users',async(_,res)=>{
  const deleteUser=await prisma.user.delete({
    where:{email:'sinan@gmail.com'}
  })
  res.json(deleteUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
