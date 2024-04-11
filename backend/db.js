const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kuldeep:simon@cluster0.ygqebfp.mongodb.net/todos").then(() => console.log('Connected!'));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const userSchema = mongoose.Schema({
    id :String,
    Name : String,
    Password : String
})
const todo = mongoose.model('todos', todoSchema);
const user = mongoose.model('users',userSchema);

module.exports = {
    todo: todo,
    user:user
};