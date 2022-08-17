const express = require('express');

// Constants
const SERVICE_NAME = process.env.SERVICE_NAME;
const IP_ADDRESS = process.env.IP_ADDRESS;
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    console.log(`ip address : ${IP_ADDRESS}`);
    res.send(`Hello from Reham Abass - my first Devops task,
	
	**************************************************************************************************************************************************** \r
	
	Subjects : Dockers - Loader Balance - Nignx, \r
	
	**************************************************************************************************************************************************** \r
	
	Result  :  \r  You are on address  :  \r   ~ ${IP_ADDRESS} `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
