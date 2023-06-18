
const contactus = require("../Models/contactus");

const appopost = async (req, res) => {
   
try{

    const {fname,lname,message,emailID,mobile_no} = req.body
    console.log(req.body);
    const sanddata = new contactus({
      firstname : fname,
      lastname : lname,
      usernumber : mobile_no,
      email : emailID,
      Message : message
    })

    const rel = await sanddata.save()
    res.send({status:"sucessful",data:rel})

}catch(err){
    console.log(`  here is errror ${err}`);
    res.send({status:"faild"})

}








  //   const payload = {
  //     "reference_id": "your_unique_reference_id_here",
  //     "document_type": "PAN",
  //     "id_number": "DTTPA8683J",
  //     "consent": "Y",
  //     "consent_purpose": "KYC verification"
  //   };
    
  //   const headers = {
  //     "client_id": "Visualcode_9_sop",
  //     "client_secret": "8ba00274144745f29ea7e87296d062b7",
  //     "module_secret": "f0444e036a684e648aa82bb81e93a08d"
  //   };
    
//     try {

// const options = {
//   method: 'POST',
//   headers: {
//     accept: 'application/json',
//     client_id: 'kycfirst_staging',
//     client_secret: 'g9LAFVrGi0M7eWllCkfo6AoNyvZyf9Ic',
//     module_secret: 'Jy8FDNJ23GnnyGM7aJBCjsvyCfc5ohzR',
//     'content-type': 'application/json'
//   },
//   body: JSON.stringify({
//     reference_id: '0000-0000-0000-2087',
//     document_type: 'VOTERID',
//     id_number: 'YDL5593272',
//     consent: 'Y',
//     consent_purpose: 'For bank account purpose only and test'
//   })
// };

// fetch('https://in.staging.decentro.tech/kyc/public_registry/validate', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//       // console.log(response.data); // print response data to console
//     } catch (error) {
//       console.error(error);
//     }

  












}

module.exports = appopost