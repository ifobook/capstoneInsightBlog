import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {create: "home"})
    
})

app.get("/posts", (req, res) => {
  res.render("posts.ejs", { create: "posts" });
});


app.get("/create", (req, res) => {
  res.render("create.ejs", {create: "create"});
});



app.post("/createPost", (req, res)=>{
  const title = req.body["title"];
  const category = req.body["category"];
  const image = req.body["image"];
  const body = req.body["body"];
  const tag = req.body["tag"];

  res.render("readPost.ejs", {blogTitle: title, blogCategory: category, blogImage: image, blogBody: body, blogTag: tag});
  
})


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

