const express = require('express')
const router = express.Router()

const {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
} = require('../controllers/videoControllers')


router.get('/',getPosts)

router.get('/:id', getPost)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

module.exports = router