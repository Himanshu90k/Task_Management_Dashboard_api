import Task from "../models/Task.js";

export const addTask = async (req, res, next) => {
    try {
        const {title, description, status, due_date} = req.body;
        const task = new Task({title, description, status, due_date: new Date(due_date)});

        await task.save();
        res.status(200).json(task);

    } catch (error) {
        console.log(error);
        next(error);
    }
};