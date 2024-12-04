import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        if(!tasks || tasks.length === 0) {
            res.status(404).json({message: 'no tasks found'});
        };

        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        next(error);
    }
    
};