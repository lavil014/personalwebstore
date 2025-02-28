const express = require("express");
const fs = require("fs");

const app = express(); // Initialize my app with express 

app.use(express.json()); //Middleware to allow express to receive data in Json format from my POST request



