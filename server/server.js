import  express from 'express';
import  cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';


const app=express();
const PORT=4000;
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

connectDB();

app.use('/api/auth',userRouter); 
app.use('/api/resume',resumeRouter);
app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'), {
    setHeaders: (res, _path) => {
      res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    },
  })
);

app.get('/',(req,res)=>{
    res.send('Hello How are You');
})

app.listen(PORT,()=>{
    console.log("Server Listening");
})