import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/routes.js"

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

const PORT = process.env.PORT || 8800;

const MONGODB_CONNECTION = "mongodb+srv://toanthang1999hp:thang2399@cluster0.1cgzi.mongodb.net/test";

mongoose.connect(MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server listening on ${PORT}`)))
.catch(err => console.log(err.message));

