const User = require("../models/user.model");

module.exports ={
    create (req, res) {
        User.create(req.body)
        .then(newCreatedUser => res.json({ user: newCreatedUser }))
        // .catch((err) => {res.status(400).res.json({ message: "Something went wrong", error: err })});
        .catch((err) => {res.status(400).json(err);});
    },
    
    delete (req, res) {
        User.deleteOne({_id: req.params.id })
        .then(result => res.json({ user: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    getAll (req, res) {
        User.find().sort({"name":1})
        .then((users) => res.json({user: users}))
        // .then((users) => res.json(users))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    findOneSingleUser (req, res) {
        User.findOne({_id: req.params.id})
        .then(oneSingleUser => res.json({ author: oneSingleUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    update (req, res) {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true,})
        .then(updateUser => res.json({ user: updateUser }))
        // .catch(err => res.json({ message: "Something went wrong", error: err }));
        .catch((err) => {res.status(400).json(err);});

    },


}
