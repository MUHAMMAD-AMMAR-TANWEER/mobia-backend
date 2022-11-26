const morgan = require("morgan")

const express = require("express")
const {data} = require("./models/Basicdata")
const bodyParser = require('body-parser');

const validator = require("validator")
const helmet = require("helmet")
const cors = require("cors")


const app = express()


app.use(bodyParser.json())
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 4000

app.post("/data", (req,res)=>{
    camera = req.body.camera
    coordinates = req.body.coordinates
    if(!camera || !coordinates){
        res.status(404).send("Please Send Data")
    }
    newData = new data({Camera:camera, Coordinates:coordinates})
    newData.save()
    res.status(200).send("Data has been saved")
    

    
})

app.get("/singleData", async (req,res)=>{
    newData = await data.findOne({}, {}, { sort: { 'created_at' : -1 } })
    console.log(newData)
    res.status(404).send(newData)

})

app.get("/bulkData", async (req,res)=>{
    newData = await data.find({}).limit(2)
    console.log(newData)
    res.status(404).send(newData)

})



app.listen(port, () => {
    console.log("Started on post ", port)
})