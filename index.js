import express from 'express'
import cors from 'cors'
import form from './route/form.js';
import ConnectToDb from './config/dbConfig.js';
import news from './route/News.js';
const PORT = process.env.PORT||5000;
const app=express();
app.use(express.json());
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cors());
await ConnectToDb();
app.use('/api',form)
app.use('/api',news)

app.get("/", (req, res) => {
    res.send("hii");
    });
app.listen(PORT,()=>{
    console.log("start")
})
