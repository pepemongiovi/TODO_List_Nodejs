const models = require('../db/models')
const Task = models.task

exports.createTask = (req, res, next) => {
    Task.create({
        title: req.body.title,
        status: "PENDING",
        description: req.body.description,
        userId: req.body.userId
    }).then(result => {
            if(result){
                res.status(200).json(result);
            } 
            else res.status(404);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        }); 
};

exports.updateTask = (req, res, next) => {
    const id = req.params.id;
    const updatedTask = {};

    Object.keys(req.body).forEach(att => {
        updatedTask[att] = req.body[att];
    });

    Task.update( updatedTask, { where: { id } })
    .then(result => res.status(200).json(result))
    .catch(err => {
        console.log(err);
        res.status(404).json({ error: err })
    })
};