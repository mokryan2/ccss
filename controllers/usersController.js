const db = require("../models");

module.exports = {
    // Literally finds all the answers
    findAll: (req, res) => {
        db.Answers
            .find(req.query)
            .sort({ date: -1 })
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    // Literally finds the specific field answers
    findByQuest: (req, res) => {
        db.Answers
            .find({ question: req.params.id })
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    findByUID: (req, res) => {
        db.Answers
            .findById({ UID: req.params.id })
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    // Creates all the new entries
    create: (req, res) => {
        db.Answers
            .create(req.body)
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Answers
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    }
}