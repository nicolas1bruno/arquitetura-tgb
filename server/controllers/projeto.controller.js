const Projeto = require('../models/projeto.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.projeto_create = function (req, res) {
    let projeto = new Projeto(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    Projeto.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Projeto Created successfully')
    })
};

exports.projeto_details = function (req, res) {
    Projeto.findById(req.params.id, function (err, projeto) {
        if (err) return next(err);
        res.send(projeto);
    })
};

exports.projeto_update = function (req, res) {
    Projeto.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, projeto) {
        if (err) return next(err);
        res.send('projeto udpated.');
    });
};

exports.projeto_delete = function (req, res) {
    Projeto.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};