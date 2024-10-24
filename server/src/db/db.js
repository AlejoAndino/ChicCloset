import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// mongodb://localhost:27017/
var localUri = "mongodb://localhost:27017/"
var { DB_URI } =process.env || { DB_URI: localUri }

export const connect = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("connect to mogodb atlas ")
  } catch (error) {
    await mongoose.connect(localUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("connect to mogodb locall ")
  }

}
