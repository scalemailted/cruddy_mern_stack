const express = require('express');
const logger = require('morgan');
const API_PORT = 3001;
const app = express();
const router = express.Router();
const Data = require('./data');
const bodyParser = require("body-parser");

//(optional) only for logging
app.use( logger('dev') );

app.use( bodyParser.urlencoded( {extended:false} ) );
app.use( bodyParser.json() );

//get method
router.get('/getData', (req, res) =>{ 
	let data = Data.find();
	return res.json({success: true, data: data});
});

//update method
router.post('/updateData', (req, res) => {
	const {id, update} = req.body;
	Data.findByIdAndUpdate(id, update);
	return res.json({success:true});
});

//delete method
router.delete('/deleteData', (req, res) =>{
	const {id} = req.body;
	Data.findByIdAndRemove(id);
	return res.json({success:true});
});

//put method
router.post('/putData', (req, res)=>{
	const {id, message} = req.body;
	if ( (!id && id !== 0) || !message){
		return res.json({success: false, error:'Invalid Inputs'});
	}
	let data = new Data();
	data.message = message;
	data.id = id;
	data.save();
	return res.json({success: true});
});

//append /api for our http requests
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));