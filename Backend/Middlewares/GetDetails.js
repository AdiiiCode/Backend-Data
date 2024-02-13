const jwt = require("jsonwebtoken");
require("dotenv").config();
const fetchUser = (req,res,next)=>
{
    const token = req.header('auth-token')
    if(!token)
    {
        res.status(401).send({error: "Please Authanticate with valid Token"});
    }
    const std = jwt.verify(token, process.env.SECRET_KEY);
    req.user = std.user;
next()
}

module.exports = fetchUser;