const express = require('express');
const router  = express.Router();

const {createfollows, getfollows, followDelete} = require('../controllers/follows');

