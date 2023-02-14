const express = require('express')

const router = express.Router()


router.get('/',(req,res,next)=> {
    console.log(`inside the general middleware`)
    res.send('On the home page')
})

module.exports = router