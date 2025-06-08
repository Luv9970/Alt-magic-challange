import axios from 'axios';

const redirect = async (code,shop) => {
  let shopifyOAuthUri = `https://${shop}.myshopify.com/admin/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`;

  const data = await axios({
    url:shopifyOAuthUri,
    method: 'POST',
    data:{}
  }).then(response=>{
      return response;
  }).catch(error=>{
    return error;
  });
  return{
    shop: shop,
    code: code
  } 
}

const authorize = (shop) => {
  console.log("Inside the install Url")
  const installUrl = `https://${shop}.myshopify.com/admin/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPES}&redirect_uri=${process.env.REDIRECT_URI}`;
// Shop = AltAudit
  return installUrl;
};

export { authorize, redirect };
 

 