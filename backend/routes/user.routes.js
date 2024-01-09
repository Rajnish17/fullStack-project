const express =require("express");
const router =express.Router();
const { registerUser,loginUser,getAllUser,deleteUserById,updateUserById}= require("../controllers/user.controller");
const {isAdmin,isUser} =require("../middleware/checkUserType")




router.post("/signup",registerUser);
router.post("/login",loginUser);
router.get("/findall",isAdmin,getAllUser);
router.delete("/delete/:id",isUser,deleteUserById);
router.put("/update/:id",isUser,updateUserById);





module.exports =router;

 