const InformationLog = require('../models/informationLog.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.list = function (req, res) {
    InformationLog.find({}, function(err, informations) {
        var informationsArray = new Array();
    
        informations.forEach(function(information) {
            informationsArray.push(information);
        });
    
        res.send(informationsArray);  
    });
};

exports.create = function (req, res) {
    let information = new InformationLog(
        {
            data: req.body.data,
            ciclo: req.body.ciclo,
            vibracao_espelho: req.body.vibracao_espelho,
            energia_consumida: req.body.energia_consumida,
            tempo_uso: req.body.tempo_uso,
            maquina: req.body.maquina,
            projeto: req.body.projeto,
            peca: req.body.peca            
        }
    );

    information.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('information Created successfully')
    })
};

exports.details = function (req, res) {
    InformationLog.findById(req.params.id, function (err, information) {
        if (err) return next(err);
        res.send(information);
    })
};

exports.update = function (req, res) {
    InformationLog.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, information) {
        if (err) return next(err);
        res.send('information udpated.');
    });
};

exports.delete = function (req, res) {
    InformationLog.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};