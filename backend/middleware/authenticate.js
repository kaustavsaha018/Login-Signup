const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const authenticate = async (req, res, next)=>{
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});

        if(!rootUser) throw new Error("User not Found!");

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;


        const token1 = jwt.sign(
            { _id: rootUser._id },
            process.env.SECRET_KEY
          );
          // persist the token as 't' in cookie with expiry date
          res.cookie('t', token1, { expire: new Date() + 9999 });
          // return response with user and token to frontend client
          
          return res.json({ token1 });

        next();

    } catch (error) {
        res.status(401).send("Unauthorized: No token provided");
        console.log(error);
    }
}
module.exports = authenticate;