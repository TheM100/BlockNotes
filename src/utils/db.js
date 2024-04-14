const mongoose = require("mongoose");
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.3nykixt.mongodb.net/${process.env.NAME_DB}`;

async function connect() {
  try {
    let connection = await mongoose.connect(URI);
    if (connection) console.log("Conexión establecida");
  } catch (error) {
    throw new Error(error);
  }
}

function disconnect() {
  mongoose.disconnect();
}

module.exports = {
  connect,
  disconnect,
};
