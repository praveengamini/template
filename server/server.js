const express  = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes')
mongoose.connect('mongodb+srv://praveengamini009:Gamini__124@cluster0.wknpk.mongodb.net/').then(() => {console.log('Connected to MongoDB');
}).catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization','Cache-Control','Expires','Pragma'],
    credentials: true

}));
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})