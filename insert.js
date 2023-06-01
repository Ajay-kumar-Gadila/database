// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';

// // Database Name
// const dbName = 'hello';

// // Create a new MongoClient
// const client = new MongoClient(url); 

// // it's creating an object that allows you to connect and interact with 
// // MongoDB database using JavaScript code.

// // Use connect method to connect to the Server
// client.connect(function() {

//   const db = client.db(dbName);
//   console.log("Connected successfully to server");

//   // Insert a single document
//   db.collection('hi').insertOne({
//     name: 'John Doe1',
//     email: 'johndoe@example.com1'
//   }, function(err) {
//     if (err) throw err;
//     console.log(`Inserted  documents into the collection`);
//     client.close();
//   });
// });

// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';

// const mydb = 'hello';

// const client = new MongoClient(uri);

// client.connect(function (){
//     const db = client.db(mydb);
//     db.collection('hi').insertOne({
//         name:"hello ",
//         age:"20",
//         email:"aaa@gmail.com"
//     },function(err){
//         if(err) throw err;

//         console.log("inserted succesfully...");
//         client.close();
//     });
    

// });


const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';

const mydb = 'hello';

const client = new MongoClient(uri);

client.connect(function (){

    const db = client.db(mydb);

    db.collection('hi').insertOne({
        name:"skibble",
        batch:3,
        currentTechnology : "MongoDB + node js "
    },function(err){
        if(err) throw err;

        console.log("succesfullly record inserted...");
        client.close();
    }

    )
});