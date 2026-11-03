import express from 'express'
const PORT = 3000

const app = express()

app.use('/getData',(req,res)=>{
    return res.status(200).json({message:"hello",name:"anish"})
})
app.use('/',(req,res)=>{

    return res.status(200).json({message:"hello root",name:"aman"})
})


app.listen(PORT, ()=>{
    console.log(`server is running now!!!`)
})