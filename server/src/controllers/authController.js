import User from '../models/userModel.js';

export const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        if (password!=user.password){
            return res.status(400).json({error:"Invalid password"})
        }
        res.status(200).json({
            _id : user._id,
            username : user.username,
            message:"User logged in successfully"
        })

    }catch{
        console.error('Error in login controller: ', error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = async (req, res) => {
    console.log("Logout Controller");
    res.send("User logged out successfully");
}