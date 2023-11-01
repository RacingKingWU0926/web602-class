const { MongoClient } = require('mongodb');

// Create an instance of MongoClient for mongoDB
const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo');

// Connect to database
client.connect()
    .then(() => {
        // Start of step 1: try connection
        // console.log('Connected successfully & database created!');
        // client.close();
        // End of `client.connect()` for step 1.

        var dbo = client.db('nodemongo');
        // Start of step 2: create a DB and then create a collection
        // dbo.createCollection('customers').then(() => {
        //     console.log('Collection created');
        //     client.close();
        // })
        // End of `client.connect()` for step 2.

        // Start of step 3: insert a document to the collection
        var custData = {name: "Westcliff", address: "Irvine, CA"};
        dbo.collection('customers').insertOne(custData).then(() => {
            console.log('1 document inserted');
            client.close();
        });
        // End of `client.connect()` for step 3.

        // Start of step 4: insert multiple documents to the collection
        // Below is to demonstrate syntax.
        // Data will be inserted by using Mongo Compass.
        //
        // var custData = [
        //     {name: "John", address: "Irvine, CA"},
        //     {name: "Peter", address: "Los Angeles, CA"},
        //     {name: "Amy", address: "San Diego, CA"},
        //     {name: "Hannah", address: "Santa Monica, CA"},
        // ]
        // dbo.collection('customers').insertMany(custData).then((res) => {
        //     console.log(`${res.insertedCount} documents inserted`);
        //     client.close();
        // })
        //
        // End of `client.connect()` for step 4.

        // Start of step 5: update data
        // var updateQuery = {address: 'Irvine, CA'};
        // var updatedValue = {$set: {address: 'Oakland, CA'}}
        // dbo.collection('customers').updateOne(updateQuery, updatedValue).then(() => {
        //     console.log('1 document updated');
        //     client.close();
        // });
        // End of `client.connect()` for step 5.

        // Start of step 6: delete data
        var deleteQuery = {name: 'Westcliff'};
        dbo.collection('customers').deleteOne(deleteQuery).then((res) => {
            console.log(`${res.deletedCount} document deleted`);
            client.close();
        });
        // End of `client.connect()` for step 6.

    })
    .catch(error => console.log('Failed to connect', error));
