const Hall = require("../Models/hallModel")
const User = require("../Models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const generateToken =(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})

}




const getHalls  = async (req, res) =>{
        try {
            const halls = await Hall.find()
            if (halls){
                res.status(200).json(halls)
            }
            else{
                res.status(404).json("Halls not Found")
            }
        } catch (error) {
            console.log(error)
        }
}



const getHallByID  = async(req, res) =>{

    try {
        const hall = await Hall.findById(req.params.id)
        
       if(!hall){
            res.status(404).json({message: "Hall not found"})
        } 
        else{
            res.status(201).json(hall)
        }
    } catch (error) {
        console.log(error)
    }
}







const addHall  = async(req, res) =>{
    const {name, description, location, isAvailable, image, carousalImages, rentPerDay, phone, carouselImage1, carouselImage2, carouselImage3} = req.body
    try {
        const newHall = await Hall.create({
            name,
            description,
            location,
            isAvailable,
            image,
            carousalImages,
            rentPerDay,
            phone,
            carouselImage1,
            carouselImage2,
            carouselImage3,

        })
        newHall.save()
        if(newHall){
            res.status(201).json(newHall)
        }
    } catch (error) {
        console.log(error)
    }
}



const updateHall  = async(req, res) =>{
    const {id}= req.params
    const {name, description, location, isAvailable, image, carousalImages, rentPerDay, phone} = req.body
    try {
        const updatedHall = await Hall.findByIdAndUpdate({_id:id}, {
            name,
            description,
            location,
            isAvailable,
            image,
            carousalImages,
            rentPerDay,
            phone,
            
        })
        updatedHall.save()
        if(updatedHall){
            res.status(200).json(updatedHall)
        }
    } catch (error) {
        console.log(error)
    }
}


const deleteHall  = async(req, res) =>{
   const {id}= req.params
   try {
        const deletedHall = await Hall.findByIdAndDelete({_id: id})
        if(deletedHall){
          return  res.status(200).json("Hall deleted Successfully")
        }
        else{
          return  res.status(500).json("Unable to delete Hall")
        }
   } catch (error) {
        console.log(error)
   }
}

// Register User

const registerUser = async(req, res, next)=>{
   const {name, email, password} = req.body;
   if(!name || !email || !password){
   return res.status(400).json("Please fill in all required fields");
    next()
}

if(password.length < 6){
   return res.status(400).json("Password must be at least 6 characters")
   
}
 
     const userExist = await User.findOne({email}) 
    if(userExist){
      return res.json("Email already exists")
        
    }



try {


   
    // Create User
    const NewUser = await User.create({name, email, password})
        //Generate Token
        const token = generateToken(NewUser._id)

        // send HTTP-only Cookie
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), //1 day
            sameSite: "none",
            secure: true
        })


    if(!NewUser){
       return res.status(500).json("Cannot create New User")
    }
    else{
        const {_id, name, email} = NewUser
        NewUser.save()
      return  res.status(201).json({_id, name, email, token})
       
    }
} catch (error) {
    console.log(error)
}
 

}



// Login
const loginUser = async(req, res, next)=>{
    const {email, password} = req.body;
    // Validation
    if (!email || !password){
       return  res.status(400).send({message: "Please enter all required fields"})
        next()
    }

    try {
        // Check if user exists
        const existingUser = await User.findOne({email})
        if(!existingUser){
          return  res.status(500).json("User not Found, please sign up")
            next()
        }

        const correctPassword = await bcrypt.compare(password, existingUser.password);

        const token = generateToken(existingUser._id)

        // send HTTP-only Cookie
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), //1 day
            sameSite: "none",
            secure: true
        })


        if(existingUser && correctPassword){
            const {_id, name, email} = existingUser;
           return  res.status(200).json({
                _id, name, email, token
            })
        }
        else{
            return res.status(400).json("Invalid email or password")
            next()
        }

    } catch (error) {
    console.log(error)
   }


}


// Logout User
const logoutUser = async(req, res)=>{
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0), 
        sameSite: "none",
        secure: true
    })
    return res.status(200).json({message: "Successfully logged out" })

}


// Get User Data 





module.exports = {
    getHalls,
    getHallByID,
    addHall,
    updateHall,
    deleteHall,
    registerUser,
    loginUser,
    logoutUser
}