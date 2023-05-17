const mongoose = require('mongoose');


const options = {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true,
};

const dbName = 'unit_test'
const url = `mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(url, options).then(function() {
    console.log('MongoDB is connected');
})
    .catch(function(err) {
        console.log(err);
    });

exports.mongoose = mongoose;