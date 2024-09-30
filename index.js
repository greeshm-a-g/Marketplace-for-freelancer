const express=require('express')
const app=express()
const bodyparser=require("body-parser")

app.use(bodyparser.json())
const cors=require('cors')
app.use(cors())
const router=require("./router")
app.use("/",router)

// app.use(express.static(`${__dirname}/uploads`));
app.use('/uploads', express.static('uploads'));
app.use(bodyparser.urlencoded({ extended: true }))
const db=require("./database")
app.listen(4000,()=>{
    console.log("server started")
})