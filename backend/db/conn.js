const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://anupamsingh2389:NxikFqGlHfuCV8sQ@cluster0.y4rmw8e.mongodb.net/registrationdata?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://127.0.0.1:27017/registrationdata';

mongoose.connect(mongoURI).then(() => {
    console.log('Connected to db successfully!!')
}).catch(() => {
    console.log('not connected to db')
})