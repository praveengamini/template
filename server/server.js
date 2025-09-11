const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); 
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth-routes');
const loginHistory = require('./routes/loginHistory-routes')
const otpRoutes = require('./routes/otp-routes')
const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors({
  origin: process.env.CLIENT_ORIGIN, 
  credentials: true,             
}));

app.use(cookieParser());
app.use(express.json());

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));


app.use('/api/auth', authRouter);
app.use('/api/loginHistory',loginHistory)
app.use('/api/otp',otpRoutes)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error(err);
  });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
