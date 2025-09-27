const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connection to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}  


const initDB = async()=>{
    await Listing.deleteMany({});//agar koi data pehle se hi data base ke andar hai to use delete kar deta hai
    initData.data = initData.data.map((obj)=>({...obj,owner: "68cf91b5b97d8e37451e8f1d"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();