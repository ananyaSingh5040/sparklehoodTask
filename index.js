const express = require("express");
const dotenv = require("dotenv");
const {connectDB}= require("./connect");
const router = require("./routes/incident")
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8001;;
connectDB(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected!");
})
// middlewares
app.use(express.json());
// routes:
app.use("/incidents",router);

app.listen(PORT, "0.0.0.0",()=>{
    console.log(`Sever running on PORT: ${PORT}`);
})