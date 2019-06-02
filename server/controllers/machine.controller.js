const Machine = require('../models/machine.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.list = function (req, res) {
    Machine.find({}, function(err, machines) {
        var machineArray = new Array();
    
        machines.forEach(function(machine) {
            machineArray.push(machine);
        });
    
        res.send(machineArray);  
    });
};

exports.create = function (req, res) {
    let machine = new Machine(
        {
            maquina: req.body.maquina
        }
    );

    machine.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('machine Created successfully')
    })
};

exports.details = function (req, res) {
    Machine.findById(req.params.id, function (err, machine) {
        if (err) return next(err);
        res.send(machine);
    })
};

exports.update = function (req, res) {
    Machine.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, machine) {
        if (err) return next(err);
        res.send('machine udpated.');
    });
};

exports.delete = function (req, res) {
    Machine.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};