const contactus = require("../Models/contactus");


const homecomp = async (req, res) =>{
    try{
const newer = contactus.find({})
        res.status(500).json({ error: 'An error occurred',records:newer });
    

    
        console.log(rel);
    
    }catch(err){
        console.log(`  here is errror ${err}`);
    }
}

module.exports = homecomp