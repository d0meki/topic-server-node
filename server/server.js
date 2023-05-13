const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        // this.port = process.env.PORT;
        // no olvidar modificar las putas variables de entorno 
        this.port = process.env.PORT;
        // this.luxandPath = '/api/luxand';
        this.auth = '/api/auth'
        //Middlewares
        this.middlewares();
        //ritas de mi aplicaion

        this.routes();
    }
    
    middlewares(){
        //CORS
         // this.app.use(cors())
        const whiteList = ['http://localhost:4200','https://astounding-chebakia-00722d.netlify.app'];
        this.app.use(cors({
            origin : whiteList
        }))
        this.app.use(express.json());

        //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
        // this.app.use(this.luxandPath, require('../routes/luxand'));
        this.app.use(this.auth, require('../routes/auth'));
    }

    listen (){
        this.app.listen( this.port, ()=>{
            console.log('servidor corriendo en puerto',this.port);
        })
    }
}

module.exports = Server
