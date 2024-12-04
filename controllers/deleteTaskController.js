import Task from "../models/Task.js";

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task) {
            res.status(404).json({message: "task not found"});
        };
        res.status(200).json(task);

    } catch (error) {
        console.log(error);
        next(error);
    }
};