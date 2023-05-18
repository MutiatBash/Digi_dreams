const express = require('express')
const router = express.Router()

const {
    createProfile,
    getProfiles,
    getProfile,
    deleteProfile,
    updateProfile
} = require('../controllers/profileController')


router.get('/',getProfiles)

router.get('/:id', getProfile)

router.post('/', createProfile)

router.put('/:id', updateProfile)

router.delete('/:id', deleteProfile)

module.exports = router