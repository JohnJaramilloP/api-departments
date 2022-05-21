const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

class App {
    constructor() {
        this.app = express()

        this.app.use( require('body-parser').json() )

        this.app.use(cors({
            origin: '*',
            methods: '*'
        }))

        this.database()

        this.routes()
    
        this.app.listen(process.env.PORT || 4000 , function() {
            console.log("Trabajando en el puerto 3000" + process.env.PORT || 3000)
        });
    }

    database() {
        mongoose.connect('mongodb+srv://john-jaramillo:johncrow19@departmentsdb.ulyoc.mongodb.net/?retryWrites=true&w=majority');
        mongoose.connection.on('error', function() {
            console.log("Se produjo un error al conectarse a la database")
        })
    }

    routes() {
        this.app.use( require('./routes/departments'))
    }
}

new App()
























// const express = require('express');
// const mongoose = require('mongoose');

// class App {
//     constructor() {
//         this.app = express()

//         this.app.use( require('body-parser').json() )

//         this.database()    
//         this.routes()

//         this.app.listen(3000, function() {
//             console.log("Servidor trabajando en puerto 3000")
//         });
//     }

//     database() {
//         mongoose.connect('mongodb+srv://john-jaramillo:johncrow19@departmentsdb.ulyoc.mongodb.net/?retryWrites=true&w=majority');
//         mongoose.connection.on('error', function() {
//             console.log("Se produjo un error al conectarse a la database")
//         })
//     }

//     routes() {
//         this.app.use( require('./routes/departments') )
//     }
// }

// new App()