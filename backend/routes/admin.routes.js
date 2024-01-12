const express =require("express");
const router =express.Router();
const { registerAdmin,loginAdmin,findOneAdminById}= require("../controllers/admin.controller");
const {isAdmin,isUser} =require("../middleware/checkUserType")




router.post("/signup",registerAdmin);
router.post("/login",loginAdmin);
router.get("/findone/:id",isAdmin,findOneAdminById);






module.exports =router;

 