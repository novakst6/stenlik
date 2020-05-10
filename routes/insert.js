var express = require('express');
var router = express.Router();

const { Pool } = require("pg");

const pool = new Pool({
  user: "jxdxupfkbvognh",
  host: "ec2-54-217-204-34.eu-west-1.compute.amazonaws.com",
  database: "d660j81p5lk259",
  password: "5f63395a84787c80a71e10c87388edde813a282c97cb8868b7666385888711a2",
  port: "5432",
  ssl: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
pool.query(
  "INSERT INTO student(firstname, lastname, age, address, email)VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')",
  (err, r) => {
    console.log(err, r);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: r, err: err }));
    pool.end();
  }
);
});

module.exports = router;
