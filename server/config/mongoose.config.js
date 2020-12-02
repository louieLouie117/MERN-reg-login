const mongoose = require("mongoose");

module.exports = (dbName)=>{
    mongoose.connect(`mongodb://localhost/${dbName}`,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify: false
    })

    .then(()=> console.log(`Connected to db ${dbName}************`))
    .catch((err)=> {
        console.log("ERRORS", err);
    })


}

