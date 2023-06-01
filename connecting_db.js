// // import { createRequire } from 'https://deno.land/std@0.177.0/node/module.ts';
// // const require = createRequire(import.meta.url);

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/nodejsdb')
//   .then(() => console.log('Connected!'));

// var MongoClient = require('mongodb').MongoClient;
// var dburl       =   "mongodb://localhost:27017/test";
// MongoClient.connect(dburl, function(err, db) {
//   if (err) {
//     throw err;
//   }
//   console.log('db connected');
//   db.close();
// });

// mongoose.set('strictQuery', true);
// mongoose.connect(Config.mongo_db_connection_string);

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// mongoose.connect('mongodb://127.0.0.1:27017/skibble)',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err)=>{
//  if(err)
//  {
//      console.log(err);
//  }
//  else{
//      console.log("successfully connected");
//  }
// });
// app.listen(3000,()=>{
//     console.log("server running...");
// })


// var MongoClient = require('mongodb').MongoClient;  
// var url = "mongodb://0.0.0.0:27017/MongoDatabase";  
// MongoClient.connect(url, function(err, db) {  
// if (err) throw err;  
// console.log("Database created!");  
// db.close();  
// });


// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri = "mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/";

// // Database Name
// // const dbName = "hello";

// // Collection Name
// const collectionName = "hi";

// async function run() {
//   const client = await MongoClient.connect(uri);

//   try {
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Insert a document
//     const result = await collection.insertOne({ name: "John Doe", age: 30 });
//     console.log(`Inserted ${result.insertedCount} documents into ${collectionName}`);

//   } finally {
//     // Close the connection
//     client.close();
//   }
// }

// run().catch(console.dir);



// var MongoClient = require('mongodb').MongoClient;  
// var url = "mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/hello";  
// MongoClient.connect(url, function(err, db) {  
// if (err) throw err;  
// var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };  
// db.collection("employees").insertOne(myobj, function(err, res) {  
// if (err) throw err;  
// console.log("1 record inserted");  
// db.close();  
// });  
// });


const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';

// Database Name
const dbName = 'hello';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Insert a single document
  db.collection('hi').insertOne({
    name: 'John Doe1',
    email: 'johndoe@example.com1'
  }, function(err, result) {
    if (err) throw err;

    console.log(`Inserted  documents into the collection`);
    client.close();
  });
});

