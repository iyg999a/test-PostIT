const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const upload = multer({storage : multer.memoryStorage()});


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Frontend/HTML/feed.html"));
// });
app.post('/create-post',upload.single("image"), async (req, res) =>{
    const body = req.body
    console.log(body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    console.log(result)

    const post = await postModel.create({
        image : result.url,
        caption : body.caption
    })

    

    return res.status(201).json({
        message : "post created",
        post
    })
})

app.get('/posts', async (req, res) =>{
    const posts = await postModel.find()

res.send(posts)
})



module.exports = app