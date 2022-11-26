const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1/MobiaDB";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/test/Data');
const { Schema } = mongoose;

const dataSchema = new Schema({
  Camera:  {type:String,required: true}, // String is shorthand for {type: String}
  Coordinates: {type:Object, required:true},
  time : { type : Date, default: Date.now }
},{collection: 'BaiscData',versionKey: false})

const data  = mongoose.model("Data", dataSchema)

// const newData  = new data({Camera:"ACE", Coordinates:{"Latitude":0,"Longitude":1}})
// newData.save()
// .then(
//     ()=>
//     {console.log("Data Saved")

// }
// ).catch((e)=>{console.log(e)})

module.exports = {data}