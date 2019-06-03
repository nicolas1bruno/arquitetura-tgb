const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetoSchema = new Schema({
    name: {type: String}
});


// Export the model
module.exports = mongoose.model('Projeto', ProjetoSchema);