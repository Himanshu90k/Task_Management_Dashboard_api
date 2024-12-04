import Task from "../models/Task.js";

export const changeStatus = async (req, res, next) => {
    try {
        //search for the task
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({message: "task not found"});
        };

        // update the task
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {$set: { status }, $inc: {__v: 1}}, 
            {new: true}
        );
        res.status(200).json(updatedTask);

    } catch (error) {
        console.log(error);
        next(error);
    }
};