const { mongoose } = require('mongoose');
require('dotenv').config();
const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('using existing connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
    if (db) console.log('connected');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export default connectToDb;
