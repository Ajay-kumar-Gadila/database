// // const MongoClient = require('mongodb').MongoClient;
// // const prompt = require('prompt-sync')();

// // const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';
// // const mydb = 'hello';
// // const client = new MongoClient(uri);

// // client.connect(function (){

// //     const db = client.db(mydb);

// //     const nameToUpdate = prompt("Enter name to update: ");
// //     const updateField = prompt("Enter field to update: ");
// //     const updateValue = prompt("Enter new value: ");

// //     const filter = {name: nameToUpdate};
// //     const update = {$set: {[updateField]: updateValue}};

// //     db.collection('hi').updateOne(filter, update, function(err){
// //         if(err) throw err;

// //         console.log("Successfully updated record...");
// //         client.close();
// //     });
// // });

// const MongoClient = require('mongodb').MongoClient;
// const prompt = require('prompt-sync')();
// const ObjectId = require('mongodb').ObjectId;

// const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';
// const mydb = 'hello';
// const client = new MongoClient(uri);

// client.connect(function (){

//     const db = client.db(mydb);

//     const idToUpdate = prompt("Enter id to update: ");
//     const updateField = prompt("Enter field to update: ");
//     const updateValue = prompt("Enter new value: ");

//     const filter = {_id: ObjectId(idToUpdate)};
//     const update = {$set: {[updateField]: updateValue}};

//     db.collection('hi').updateOne(filter, update, function(err){
//         if(err) throw err;

//         console.log("Successfully updated record...");
//         client.close();
//     });
// });


const MongoClient = require('mongodb').MongoClient;
const prompt = require('prompt-sync')();
const ObjectId = require('mongodb').ObjectId;

const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';
const mydb = 'hello';
const client = new MongoClient(uri);

client.connect(function (){

    const db = client.db(mydb);

    const idToUpdate = prompt("Enter id to update: ");
    const updateField = prompt("Enter field to update: ");
    const updateValue = prompt("Enter new value: ");

    const filter = {_id: ObjectId(idToUpdate)};
    const update = {$set: {}};
    update.$set[updateField] = updateValue;

    db.collection('hi').updateOne(filter, update, function(err){
        if(err) throw err;

        console.log("Successfully updated record...");
        client.close();
    });
});
