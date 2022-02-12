const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./User');

const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://mthanhdg:Mt6475139798@cluster0.muxfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(success => {
console.log('Success Mongodb connection')
}).catch(err => {
console.log('Error Mongodb connection')
});


app.get('/users', async (req, res) => {
    const users = await userModel.find({});
    try {
    res.status(200).send(users);
    } catch (err) {
    res.status(500).send(err);
    }
});


app.post('/users', async (req, res) => {

    const user = new userModel(req.body);
    
    try {
    await user.save((err) => {
        if(err){
        res.send(err)
        }else{
        res.send(user);
        }
    });
    } catch (err) {
    res.status(500).send(err);
    }
});

app.listen(8081, () => { console.log('Server is running...') });