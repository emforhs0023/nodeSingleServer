var express = require("express");
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get("/",  function(req, res){
    res.render("login/login.html")
})

router.get("/forgot/id",  function(req, res){
	res.render("login/forgotId.html")
})

router.get("/forgot/pwd",  function(req, res){
	res.render("login/loginPwd.html")
})

router.get("/password/change",  function(req, res){
	res.render("login/loginChange.html")
})

router.get("/password/longTermUser",  function(req, res){
	res.render("login/longTermUser.html")
})

router.get("/forgot/module/:id",  function(req, res){
	res.render("login/forgotId.html")
})
router.get("/password/module/:id",  function(req, res){
	res.render("login/loginChange.html")
})

module.exports = router;