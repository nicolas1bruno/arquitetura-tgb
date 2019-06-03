const Projeto = require('../models/projeto.model');

exports.list = function (req, res) {
    Projeto.find({}, function(err, projetos) {
        res.send(projetos);  
    });
};

exports.new = function (req, res) {
    let projeto = new Projeto(
        {
            name: req.body.name            
        }
    );

    projeto.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('projeto Created successfully')
    })
};

exports.view = function (req, res) {
    Projeto.findById(req.params.id, function (err, projeto) {
        if (err) return next(err);
        res.send(projeto);
    })
};

exports.update = function (req, res) {
    Projeto.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, projeto) {
        if (err) return next(err);
        res.send('projeto udpated.');
    });
};

exports.delete = function (req, res) {
    Projeto.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};