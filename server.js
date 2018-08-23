const express = require("express");
const app = express();
// const Cat\ = require("./models/Cat");
const Movie = require("./models/Movie")
//MONGOOSE
const mongoose = require("mongoose");

const hbs = require("hbs");
const path = require("path");

//MONGOOSE REMOVE DEPRECATION WARNING ----------------------
mongoose.connect(
  "mongodb://localhost/video",
  { useNewUrlParser: true }
);


app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
// app.use(express.static(path.join(__dirname, "./public")));
// hbs.registerPartials(path.join(__dirname, "./views/partials"));

app.get("/", (req, res, next) => {
  res.render("index", { title: "HOMEPAGE" });
});


app.get('/movie', (req, res) => {
  const {
      title, rate, year,
  } = req.query

  const query = {
      $and: [
      title ? { title : {$regex: new RegExp('^'+title+ '.*','i')} } : {},
          rate ? { rate } : {},
          year ? { year } : {},
      ],
  }

  console.log(query['$and'])

  Movie.find(query).then(movies => res.send(movies))
})
// app.get("/cat", (req, res) => {
//   console.log("QUERY", req.query)
//   const { age,name} = req.query
//   Cat.find({age, name })
//   .then(cats => res.send(cats))
// });


// const myCat = new Cat({
//   name: "Minou",
//   age: 13,
//   fur_color: "white",
//   hobbies: ["eating", "sleeping", "tree climbing"]
// });
// SAVE THE INSTANCE-----------------------------------
// console.log(myCat)

//

// app.get("/cat/:catId", (req, res) => {
//   res.send(req.params);
// });

//RETURN ALL CATS WITH MATCHING NAME -----------------------------
// app.get("/cat/:catName", (req, res) => {
//   Cat.find({name: req.params.catName})
//   .then(cats => res.send(cats))
// });

// app.get("/cat", (req, res) => {
//   console.log("QUERY", req.query)
//   Cat.find({age: req.query.age})
//   .then(cats => res.send(cats))
// });



app.listen(3000);

