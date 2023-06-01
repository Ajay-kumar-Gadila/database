const MongoClient = require('mongodb').MongoClient;
const prompt = require('prompt-sync')();
const ObjectId = require('mongodb').ObjectId;

const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';
const mydb = 'hello';
const client = new MongoClient(uri);

client.connect(function (){

    const db = client.db(mydb);

    const idToDelete = prompt("Enter id to delete: ");

    const filter = {_id: ObjectId(idToDelete)};

    db.collection('hi').deleteOne(filter, function(err){
        if(err) throw err;

        console.log("Successfully deleted record...");
        client.close();
    });
});
