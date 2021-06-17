require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chalk = require('chalk');


//PORT
const port = process.env.PORT || 8000;


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.get('/all/:name',cors(),(req,res)=>{
		const Name = req.params.name;
		switch(Name){
			case 'crocin':
				return res.json({
					data:[
						
						{
							name:'Crocin',
							price:20,
							company:'GlaxoSmithKline Consumer Healthcare',
							from:'1 mg',
							link:'https://www.1mg.com/drugs/crocin-advance-tablet-600468'
						},
						{
							name:'Crocin',
							price:26.13,
							company:'GlaxoSmithKline Consumer Healthcare',
							from:'Pharmeasy',
							link:'https://pharmeasy.in/online-medicine-order/crocin-650mg-advance-tab-15-s-217263'
						},
						{
							name:'Crocin',
							price:18.34,
							company:'PARACETAMOL 500 MG',
							from:'Netmeds',
							link:'https://www.netmeds.com/prescriptions/crocin-advance-tablet-20s'
						},
					]
				})
			
			
			case 'dolo':
				return res.json({
					data:[
						
						{
							name:'Dolo 650mg Tablet 15',
							price:26.13,
							company:'Micro Labs Ltd',
							from:'1 mg',
							link:'https://www.1mg.com/drugs/dolo-650-tablet-74467'
						},
						{
							name:'Dolo 650mg Tablet 15',
							price:26.13,
							company:'Micro Labs Ltd',
							from:'Pharmeasy',
							link:'https://pharmeasy.in/online-medicine-order/dolo-650mg-strip-of-15-tablets-44140'
						},
						{
							name:'Dolo 650mg Tablet 15',
							price:27.67,
							company:'Micro Labs Ltd',
							from:'Net meds',
							link:'https://www.netmeds.com/prescriptions/dolo-650mg-tablet-15-s'
						},
						
					]
				})
		
				default:
				res.json({
					msg: 'Try crocin, dolo'
				})
		}
	
});

app.listen(port,()=>{
	console.log(`Server started ${port}`);
})