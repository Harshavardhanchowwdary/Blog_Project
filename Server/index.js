const express = require('express');
const cors = require('cors');
const {Client} = require('pg');
const App = express();
App.use(cors());
App.use(express.json()); // Parse JSON bodies 
App.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


App.post('/Login',async (request,response)=> {
    const {email,password} = request.body;
    client.query(`select * from userdetails where email = $1 and password = $2`,[email,password],(err,result)=>{
        if(err){
            console.log("Invalid Credentials:",err);
        }if(result.rows.length > 0){
            console.log("User Login Successfully");
            response.status(200).json({success:true,message:"Login Successful"});
    }else{
            console.log("Invalid Credentials");
            response.status(401).json({success:false,message:"Invalid Credentials"});
        }
    });
})



App.post('/Register', async (req, res) => {
    client.query(`insert into userdetails(name,email,password) values('${req.body.name}','${req.body.email}','${req.body.password}')`, (err, data) => {
        if (err) {
            console.error("Data not inserted Successfully:", err);
        }else{
            console.log("Data inserted Successfully");
        }
        res.status(200).json({ message: "User registered successfully" });
        console.log("User registered successfully:", req.body);
    });
});


App.listen(5000, (err) => {
    console.log("Server is running on port 5000");
    if(err) {
        console.error("Server is not Running:", err);
    }
});


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'root',
    port: 5432,
});

client.connect((error)=> {
    if(error) {
        console.error("Database not Connected:", error);
    } else {
        console.log("Database connected successfully");
    }   
});