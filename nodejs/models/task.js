const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    text: {
        type: String,
    },
    timestamp: {
        type: String,
    },
    edited: {
        type: String,
        default: 'not-edited',
    },
    CommenterId:{
        type:String,
    },
});
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: String,
    },
    priority: {
        type: String,
    },
    status: {
        type: String,
    },
    category: {
        type: String,
    },
    attachments: {
        type: String, 
    },
    selectedOwner: {
        type: String,
    },
    createrId:{
        type:String,
    },
    creater:{
        type:String,
    },
    comments: [commentSchema]
});
const Task = mongoose.model('task', taskSchema);
module.exports = Task;