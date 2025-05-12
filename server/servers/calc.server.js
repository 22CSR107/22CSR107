const CalcModel=require("../models/calc.model");
class Calc{
    async Add(num1,num2,c){
        const choice=await CalcModel.find(c);
        if(!c){
            throw new console.error("Invalid choice");
        }
        else{
                if(c==='p'){
                    return "prime";
                }
                else if(c==='f'){
                    return "fibonacci";
                }
                else if(c==='e'){
                    return "even";
                }
                else if(c==='r'){
                    return "random";
                }
            }
    }
}
const Calcobj=new Calc;
module.exports=Calcobj;