import mongoose from "mongoose";

const DB_CONNECTION_URL = 'mongodb://69.0.69.25:27017/test';

const connectDB = () => {
    console.log(`-- Database is trying to connect on ${new Date()} --`);
    const options = {
        // keepAlive: true,
        // autoReconnect: true,
        // poolSize: 10,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    return mongoose.connect(DB_CONNECTION_URL, options);
}

export default connectDB;