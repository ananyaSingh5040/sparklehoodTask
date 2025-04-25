const express = require("express");
const router = express.Router();
const{handleGetIncident,handlePostIncident, handleIdIncident,handleDeleteIncident} = require("../controllers/incident");
router.get("/",handleGetIncident);
router.post("/",handlePostIncident);
router.get("/:id",handleIdIncident);
router.delete("/:id",handleDeleteIncident);
module.exports=router;