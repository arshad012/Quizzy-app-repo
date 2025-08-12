import { config } from "dotenv";
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import cron from 'node-cron';

import { errorHandler } from "./utils/errorHandler.js";
import { assessmentsRouter, submissionsRouter, templateRouter } from "./routes/index.js";
import { checkSubmissions } from "./cron/index.js";

config();

const app = express();

// JSON body parsing
app.use(json());
app.use(cors());

// MongoDB connection
const mongodb_url = process.env.MONGODB_URL;

connect(mongodb_url)
.then(() => console.log('✅ Database connected'))
.catch((err) => console.error('Database connection error', err));


app.use("/api/templates", templateRouter);
app.use("/api/assesments", assessmentsRouter)
app.use("/api/submissions", submissionsRouter)

app.use(errorHandler)


app.get('/', (req, res) => {
    res.json({message: 'Quizzy app is up.'});
})


cron.schedule('* * * * *', checkSubmissions);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 app is running on port ${PORT}`);
})
