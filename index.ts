import express, { Request, Response } from 'express'
import { prisma } from './lib/prisma'
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.get('/users',async(_,res)=>{
const users=await prisma.user.findFirst();
res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})