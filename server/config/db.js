const mongoose = require('mongoose');



const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/graphql');

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;