import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/index.js';

const app = express();

dotenv.config();
const port = process.env.PORT;
const allowedUrl = process.env.FRONTEND_URL.split(",");
const mongoDBConnectionString = process.env.DBURL;

//middleware
app.use(cors({
    origin: allowedUrl,
    optionsSuccessStatus: 200
}));
app.use(express.json({limit: '20kb'}));

//Routes
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect(mongoDBConnectionString, {dbName: 'TasksData'})
    .then((conn) => {
        const {host, port} = conn.connection
        console.log(`The mongoDB host: ${host} - is connected on port: ${port}`)
    })
    .catch((err) => {
        console.log("monogDB connection error: ", err)
    })


app.listen(port, () => console.log(`The server is running on port: ${port}`));