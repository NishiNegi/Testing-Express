const { response } = require("express");
const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    title: "new Title marcos",
    price: 100004,
    description: "new Description",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2672",
    ],
  },
  {
    id: 3,
    title: "new try",
    price: 29,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4493",
    ],
  },
  {
    id: 4,
    title: "Licensed Plastic Table",
    price: 808,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2350",
    ],
  },
  {
    id: 5,
    title: "Refined Plastic Shirt",
    price: 252,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    images: [
      "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
      "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
      "https://api.lorem.space/image/watch?w=640&h=480&r=4565",
    ],
  },
];
const aboutMe = {
  name: "Juan Camilo Orjuela",
  age: 30,
  email: "orjuela9@gmail.com",
  city: "Bogota",
  headline: "Publisher, designer and developer",
  links: [
    { name: "Linkedin", url: "https://www.linkedin.com/in/juan-orjuela/" },
    { name: "Behance", url: "https://www.behance.net/juan_o" },
    { name: "GitHub", url: "https://github.com/NishiNegi" },
    { name: "Publishing house", url: "https://tanukilibros.com" },
  ],
  skills: [
    { name: "Editorial design", level: "Advanced" },
    { name: "Social Media design", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Django", level: "Intermediate" },
    { name: "Javascript", level: "Learning" },
    { name: "Node", level: "Learning" },
    { name: "React", level: "Learning" },
  ],
};

app.get("/api/products", function (req, res) {
  res.json(products);
});

app.get("/api/products/:id", function (req, res) {
  const id = Number(req.params.id);
  const indexList = products.map((element) => element.id);
  const product = products.find((element) => element.id == id);
  if (indexList.includes(id)) {
    res.json(product);
  }
  else {
    res.status(404);
    es.send(`El producto no existe`);
  }
});

app.delete("/api/products/:id", function (req, res){
  const id = Number(req.params.id);
  const indexList = products.map((element) => element.id);
  if (indexList.includes(id)) {
    res.status(200)
    res.send("DELETE Request Called");
  }
  else {
    res.status(404);
    es.send(`El producto no existe`);
  }
  
})

app.get("/info", function (req, res) {
  res.send(`<p>Our store has info for ${products.length} products</p>
  <p>${new Date()}</p>`);
});

app.get("/about", function (req, res) {
  res.json(aboutMe);
});

app.listen(8080);
