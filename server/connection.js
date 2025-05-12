const mongoose=require('mongoose');
function connect_db(){
    mongoose.connect(process.env.PORT).then(()=>{
        console.log(`Server running on port ${PORT}`).catch((err)=>{
            console.error(err);
        });
    });
}