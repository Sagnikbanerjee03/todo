const zod = require("zod");

const createTodo = zod.object({
  title: zod.string().nonempty("Title is required"),
  description: zod.string().optional(),
});


const updateTodo = zod.object({
  title: zod.string().optional(),
  description: zod.string().optional(),
});

module.exports = { 
    createTodo:createTodo,
    updateTodo:updateTodo
 };
