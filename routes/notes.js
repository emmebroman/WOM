const express = require('express')
const router = express.Router()

//relativt till notes/
router.get('/', (req, res) => {
    console.log("notes GET")
    res.send({msg: 'notes'})
})

router.post('/', (req, res) => {
    console.log("notes POST")
    res.send({msg: 'post', reqBody: req.body})
})

router.patch('/:id', (req, res) => {
    console.log("notes PATCH")
    res.send({
        msg: 'patch', 
        id:req.params.id,
        reqBody: req.body})

})


router.delete('/:id', (req, res) => {
    console.log("notes DELETE")
    res.send({
        msg: 'delete', 
        id:req.params.id
       })

})



module.exports = router