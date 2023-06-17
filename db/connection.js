const mongoose = require('mongoose')

const connectdb = (con) =>{
    return mongoose.connect(con).then(() =>{
        console.log("connection successfull");
    }).catch((err) =>{
        console.log(err);
    })
}

module.exports = connectdb