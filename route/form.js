import express from 'express'
import formcontroller from '../controller/formcontroller.js';

const form=express.Router();

form.post('/contact',formcontroller);
form.get('/test', (req, res) =>{
    res.status(200).json({success:"true"})
})
export default form;