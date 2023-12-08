import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {connect} from './config/index.js';
import auth from './router/auth.js';
import users from './router/users.js';
const app = express();
// import http from 'http'

app.set('port', 5000);

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
connect(app)

app.use('/auth',auth);
app.use('/users',users);
