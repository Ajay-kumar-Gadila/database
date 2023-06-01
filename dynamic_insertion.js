const MongoClient = require('mongodb').MongoClient;
const prompt = require('prompt-sync')();

const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';
const mydb = 'hello';
const client = new MongoClient(uri);

client.connect(function (){

    const db = client.db(mydb);

    const name = prompt("Enter name: ");
    const batch = parseInt(prompt("Enter batch number: "));
    const currentTechnology = prompt("Enter current technology: ");

    db.collection('hi').insertOne({
        name: name,
        batch: batch,
        currentTechnology : currentTechnology
    }, function(err){
        if(err) throw err;

        console.log("Successfully inserted record...");
        client.close();
    });
});
