const express = require('express');
const cors = require('cors');
class Server {

    constructor(){
        this.app = express();


        this.port = process.env.PORT
        this.tipoDineroPath = "/api/tipoDeDinero";
        this.middlewares();

        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.operacionPath, require('../routes/tipoDeDinero.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }

}

module.exports = Server; 