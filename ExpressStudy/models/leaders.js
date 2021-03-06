const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);


const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        default: '',
        required:true
    },
   
    abbr: {
        type: String,
        required: true,
       
    },
    description: {
        type: String,
        default: ''
    },
   
    featured: {
        type: Boolean,
        default:false      
    },
}, {
    timestamps: true
});
var Leader = mongoose.model('Leader', leaderSchema);

module.exports = Leader;