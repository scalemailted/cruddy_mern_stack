const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const API_PORT = 3001;
const app = express();
const router = express.Router();
const Data = require('./data');
const bodyParser = require("body-parser");
const cors = require('cors');
app.use( cors() );

//this is the mongodb 
const dbRoute = 'mongodb+srv://dummy1:dummy1password@cluster0-nkfeq.mongodb.net/test?retryWrites=true';
mongoose.connect(dbRoute, {useNewUrlParser: true} );
let db = mongoose.connection;
db.once( 'open', ()=>console.log('connected to database') )

//(optional) only for logging
app.use( logger('dev') );

app.use( bodyParser.urlencoded( {extended:false} ) );
app.use( bodyParser.json() );

//get method
router.get('/getData', (req, res) =>{ 
	let callback = (err, data) => res.json({success: true, data: data});
	Data.find( callback );
});

//update method
router.post('/updateData', (req, res) => {
	const {id, update} = req.body;
	let callback = () => res.json({success: true})
	Data.findByIdAndUpdate( id, update, callback );
});


//delete method
router.delete('/deleteData', (req, res) =>{
	const {id} = req.body;
	let callback = () => res.json({success: true})
	Data.findByIdAndRemove(id, callback );
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
	let callback = () => res.json({success: true})
	data.save( callback );
});

//append /api for our http requests
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));