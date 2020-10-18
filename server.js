// importing
import express from "express";
import mongoose from "mongoose"
import Messages from "./dbMessages.js";
import Test from "./testDb.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware

app.use(express.json());

// DB config
const connectionURL = 'mongodb+srv://admin:zumba1234@cluster0.tszox.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connectionURL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hello dunia"));

app.post("/messages/new", (req,res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})
app.post("/messages/new/test", (req,res) => {
    const testMessage = req.body;
    Test.create(testMessage, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
            console.log("All is well");
        }
    })
})

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
