import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router.js";
dotenv.config();
import conn from "./connection.js";
const app= express();
app.use(express.json())
app.use(cors());
app.use(express.static("./dist"));

app.use('/api', router);
 
app.get("/api" , (req, res) => {
    return res.status(200).json({
        msg: "This is api get"
    })
})

conn().then(()=>{
    app.listen(process.env.VITE_PORT,error =>{
        if(error){
          return  console.log(error);
        }
    });
}).catch(error=>{
    console.log(error);
})