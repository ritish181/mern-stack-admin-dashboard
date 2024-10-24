import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors);

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL,{}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`))
}).catch((error)=> console.log(`${error} did not connect`))



//.ENV FILE
// MONGO_URL= 'mongodb+srv://ritish181:ryuDoCrZoj2nG3Jr@cluster0.ruood.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0'
// PORT=5001