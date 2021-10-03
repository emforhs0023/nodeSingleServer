const express = require('express')
const path = require('path');
const fs = require('fs')
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
var nunjucks = require("nunjucks");

const cookieParser = require('cookie-parser');
const http = require("http").Server(app)
dotenv.config();
app.use(cors({
	origin: true,
	credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
nunjucks.configure("views",{
	autoescape : true,
	express    : app,
	watch      : true
})

app.use(express.static(path.join(__dirname, 'public')));

var loginRoute = require("./routes/loginRoute");
app.use("/login", loginRoute);

app.use((req, res, next) => {
	const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
	error.status = 404;
	next(error);
});

http.listen(9008, "0.0.0.0", function(){
	console.log("server start 9008");
});
