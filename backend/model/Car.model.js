const mongoose=require("mongoose")

const carSchema=mongoose.Schema({

    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    offprice:{type:Number,required:true},
    transmission:{type:String,required:true},
    fueltype:{type:String,required:true},
    seat:{type:Number,required:true},
    cartype:{type:String,required:true},
    rating:{type:Number,required:true},
    km:{type:String,required:true},
    location:{type:String,required:true},
    owner:{type:String,required:true}
    
})

const CarModel=mongoose.model("car",carSchema)

module.exports={
    CarModel
}