const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ankha:159753@ankh-ookob.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri);

function mongodb() {
    return function (req, resp, next) {
        client.connect(err => {
            if (err) throw err;
            const collection = client.db("data").collection("course");
            if (collection) {
                req.dbcollection = collection;
                next()
            }
            else console.error();
        });
    }
}
module.exports = mongodb;