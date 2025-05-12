const mongoose=require('mongoose');
const Calcschema=new mongoose.Schema({
    num1:{
        type:Number,
        required:true
    },
    num2:{
        type:Number,
        required:true
    },
    choice:{
        type:String,
        requiredLtrue
    }
});
const CalcModel=mongoose.model('calc',Calcschema);
module.exports=CalcModel;