const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://vu3f1920030:H6yFjxyXCk0jCP2U@cluster0.aql7a4f.mongodb.net/"
 
// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("Connected to MongoDB");
//     })
// }
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

module.exports = connectToMongo