const {Router} = require('express')

const router = Router();

router.get("/", )

router.post("/", (req, res)=>{
    res.json({
        "message": "post api",
    })
})
router.delete("/", (req, res)=>{
    res.json({
        "message": "delete api",
    })
})
router.put("/", (req, res)=>{
    res.json({
        "message": "post put",
    })
})
router.patch("/", (req, res)=>{
    res.json({
        "message": "path api",
    })
})



module.exports = router;