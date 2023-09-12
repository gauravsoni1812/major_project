const mongoose = require('mongoose');



const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.3h6iboo.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;