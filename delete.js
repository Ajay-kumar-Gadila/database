const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://root:1234@cluster0.nv0hpjx.mongodb.net/';

const mydb = 'hello';

const client = new MongoClient(uri);

client.connect(function (){
    const db = client.db(mydb);
  
    // Update document in 'hi' collection
    db.collection('hi').updateMany (
        { name: "skibble" },
        { $set: { currentTechnology: "MongoDB + node.js + React" } },
        function(err){
            if(err) throw err;
          
            console.log("Successfully updated record...");
            
            // Delete document from 'hi' collection
            db.collection('hi').deleteOne(
                { name : "skibble"},
                function(err){
                    if(err) throw err;
                    
                    console.log("Successfully deleted record...");
                    client.close();
                }
            );
        }
    );
});
