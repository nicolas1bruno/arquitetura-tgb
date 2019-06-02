const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InformationLogSchema = new Schema({
    maquina: {type: String, required: true, max: 100},
    potencia: {type: String},
    voltagem: {type: String},
    amperagem: {type: String},
    resistencia: {type: String},
    timestamp: {type: String},
    ultima_parada: {type: String},
    vibracao_base: {type: String},
    vibracao_espelho: {type: String},
    vibracao_rolo: {type: String},
    progresso: {type: String},
    velocidade: {type: String},
    altura_camada: {type: String},
    precisao_dimencional: {type: String},
    espesura_parede: {type: String},
    tolerancia: {type: String},
    projeto: {type: String},
    peca: {type: String},
});


// Export the model
module.exports = mongoose.model('InformationLog', InformationLogSchema);