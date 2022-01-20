const jwt = require('jsonwebtoken')
const express = require('express');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from the server of router .js`)
});
// router.post('/register',(req,res)=>{
//     //By destructruing the 
// //Using promisses of java script


//     const {name, email, phone, work, password, cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "Please filled the field properly"});

//     }
//     User.findOne({email: email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error: "Email already Exist"});
//         }
//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(() => {
//             res.status(201).json({message: "user registered seccessfuly"});
//         }).catch((err)=>res.status(500).json({erorr: "Failled to registered"}));
//     }).catch(err=>{console.log(err); })
//     // console.log(name);
//     // console.log(email);
//     // console.log(phone); 
//     // console.log(work);
//     // console.log(req.body.name);
//     // console.log(req.body.email);
//     // console.log(req.body);
//     // res.json({message : req.body})
// })

//Here use awaits and async
router.post('/register', async (req, res) => {



    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled the field properly" });

    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            //here we have  to hash the data for the protectionn from hackers

            await user.save();
            res.status(201).json({ message: "user registered successfuly" });

        }

    } catch (err) {
        console.log(err);
    }

})
//login route
router.post('/signin', async (req, res) => {
    // console.log(req.body)
    // res.json({"message" : "awesome"});
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please filled the data" })
        }
        const userLogin = await User.findOne({ email: email });


        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

                 token = await userLogin.generateAuthToken()
                console.log(token)
                res.cookie("jotoken",token ,{
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly : true
                });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials" });
            } else {
                res.json({ message: "User signin successfully" })
            }


        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }




        if (!userLogin) {
            res.json({ error: "User error" })
        } else {
            res.json({ message: "user Sign in successfully" })
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router
