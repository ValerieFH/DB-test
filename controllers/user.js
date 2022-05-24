const router = require('express').Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()

        res.json(users)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ _id: id })

        res.json(user)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.post('/create', async (req, res) => {
    try{
        const { username, password, age, name } = req.body
        const createdUser = await new User({
            username,
            password,
            age,
            name
        }).save()
        res.send(createdUser)
    } catch (error) {
        // console.log("ERROR: ", error)
        res.status(400).json({ "message": String(error) })
    }
})

module.exports = router