const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Referral = new Schema({
    referrals: String,
    clicks: Number
})

module.exports = mongoose.model('Referral', Referral)