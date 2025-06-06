import dotenv from 'dotenv';
dotenv.config({path: './.env'});

import express from 'express';
import cors from 'cors';
// import { User } from './config.js';
import { authorize , redirect } from './ShopifyOAuthHelper.js';
import bodyParser from 'body-parser';





// app.get('/api/shopify/authorize', async(req , res) =>{
//     console.log(req.query.shop);
//     return res.redirect(await authorize(req.query.shop));
// })

// app.get('/api/shopify/redirect', async(req, res) => {
//     return res.json(await redirect(req.query.code));
// })





const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server Running!');
});

app.get('/api/shopify/authorize', (req, res) => {
  const shop  = req.query.shop;

  // console.log('Shopify shop:', shop);

  if (!shop) return res.status(400).send('Missing shop parameter');
  const installUrl = authorize(shop);

  // console.log("Outside the install Url");

  res.redirect(installUrl);
});



app.get('/api/shopify/redirect', async (req, res) => {

  // console.log("Inside the redirect function");

  const { shop, code } = req.query;
  if (!shop || !code) return res.status(400).send('Missing shop or code');

    return res.json(await redirect(req.query.code,req.query.shop));

});
 



// app.post("/create" , async(req,res)=>{
//   const data = req.body;
//   console.log("Data for users", data);
//   await User.add(data)
//   res.send({msg:"User Added"});

// })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

















// const express = require("express");
// const cors = require("cors");
// const User = require("./config");
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get("/", async (req, res) => {
//   const snapshot = await User.get();
//   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.send(list);
// });

// app.post("/create", async (req, res) => {
//   const data = req.body;
//   await User.add({ data });
//   res.send({ msg: "User Added" });
// });

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await User.doc(id).update(data);
//   res.send({ msg: "Updated" });
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });
// app.listen(4000, () => console.log("Up & RUnning *4000"));