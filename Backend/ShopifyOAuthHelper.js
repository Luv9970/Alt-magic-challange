// import axios from "axios";

// const authorize = async (shop) =>{
//     return encodeURI(`https://${shop}.myshopify.com/admin/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPES}&redirect_uri=${process.env.REDIRECT_URI}`);
// }

const redirect = async (code,shop) => {
  let shopifyOAuthUri = `https://${shop}/admin/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`;

  const data = await axios({
    url:shopifyOAuthUri,
    method: 'POST',
    data:{}
  }).then(
    response=>{
      console.log("Response from Shopify OAuth", response);
    return response;
  }).catch(
    error=>{
    return error;
  });

  return data
}

// export { authorize, redirect };





 
import axios from 'axios';

const authorize = (shop) => {
  console.log("Inside the install Url")
  const installUrl = `https://${shop}.myshopify.com/admin/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPES}&redirect_uri=${process.env.REDIRECT_URI}`;
// Shop=Alt-magic1

  return installUrl;
};

// const redirect = async (shop, code) => {
//   const response = await axios.post(`https://${shop}/admin/oauth/access_token`, {
//     client_id: process.env.CLIENT_ID,
//     client_secret: process.env.CLIENT_SECRET,
//     code
//   });
//   return response.data.access_token;
// };

export { authorize, redirect };
 

 