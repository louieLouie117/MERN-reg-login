const port = 8000;
const cors = require("cors")
const express = require("express")
const dbName = "sally-dev-db";


require("./config/mongoose.config")(dbName);

const app = express();

app.use(express.json());
app.use(cors());


require("./routes/user.routes")(app);


app.listen(port, ()=>{console.log(`Listening to ${port} for REQ and RES`);})