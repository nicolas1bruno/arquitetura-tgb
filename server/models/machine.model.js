const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MaquinaSchema = new Schema({
    maquina: {type: String, required: true, max: 100},    
});


// Export the model
module.exports = mongoose.model('Maquina', MaquinaSchema);