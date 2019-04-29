const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4000;


//const PORT = 4000;
const mongoose = require('mongoose');
const router = express.Router();
let Referral = require('./schema');

app.use(cors());
app.use(bodyParser.json());
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

mongoose.connect(mongoUri);

//mongoose.connect('mongodb://localhost:27017/referrals', { useNewUrlParser: true})
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("mongodb connected")
})

router.get('/', (req, res)=>{
    Referral.find((err, referral)=>{
        if(err){
            console.log(err)
        }else{
            res.json(referral)
        }
    })
});

router.get('/:id', (req, res)=>{
    let id = req.params.id;
    Referral.findById(id, (err, referrals)=>{
        res.json(referrals);
    })
});

router.post('/add', (req, res)=>{
    let referral = new Referral(req.body);
    todo.save().then(referral =>{
        res.status(200)
    })
    .catch(err=>{
        res.status(400).send("CRITICAL FAILURE")
    })
})

router.post('/update/:id', (req, res)=>{
    Referral.findById(req.params.id, (err, referral)=>{
        if(!referral)
        res.status(404).send("data not found");
        else
        referral.referrals = req.body.referrals;
        referral.clicks = req.body.clicks

        referral.save().then(referral =>{
            res.json("referral input")
        })
        .catch(err=>{
            res.status(400).send("NOT UPDATED")
        })
    })
})

app.use('/referrals', router)
app.listen(PORT, function(){
    console.log("Server is listening" + PORT)
});