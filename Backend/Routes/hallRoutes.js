const express = require("express");
const router = express.Router();
const {getHalls, addHall, updateHall, deleteHall, getHallByID, registerUser, loginUser, logoutUser} = require("../Controllers/hallControllers")

router.get('/getHalls', getHalls)
router.get('/getHall/:id', getHallByID)
router.post('/addHall', addHall)
router.patch('/updateHall/:id', updateHall)
router.delete('/deleteHall/:id', deleteHall)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)



module.exports = router