const express = require('express');
const User = require('../models/User');

const usersRouter = express.Router();

usersRouter.get('/', async (request, response) => {
    const users = await User.findAll();
    response.json(users)
})

usersRouter.post('/', async (request, response) => {

    const { firstName, lastName, age } = request.body
    const user = await User.create({
        firstName,
        lastName,
        age,
    });

    response.json(user)
})

usersRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    await User.destroy({ where: { id }})

    response.status(204).json();
})

usersRouter.put('/:id', async (request, response) => {
    const { firstName, lastName, age } = request.body
    const { id } = request.params

    await User.update({ firstName, lastName, age}, {
        where: { id }
    })

    response.json({ id, firstName, lastName, age });
})

module.exports = usersRouter