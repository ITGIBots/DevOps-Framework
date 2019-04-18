/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 */

import {bootstrapMicroframework} from "microframework";
import {expressLoader} from "./src/loaders/expressLoader";
import {env} from './env';
import * as mongoose from 'mongoose';
const options = { promiseLibrary: mongoose.Promise };

bootstrapMicroframework([   
    expressLoader,
])
    .then(() => console.log("Application is up and running."))
    .catch(error => console.log("Application is crashed: " + error));

    console.log('connecting to db '+ env.db.database);
    console.log('db Username '+ env.db.username);
    console.log('db Password '+ env.db.password);
    console.log('db Host '+ env.db.host);
    console.log('db Port'+ env.db.port);
    mongoose.connect(("mongodb://"+env.db.username+":"+env.db.password+"@"+env.db.host+":"+env.db.port+"/"+env.db.database), options);
    mongoose.connection.on('error', (error) => {
        console.log(error);
        console.log('MongoDB connection error. Please make sure MongoDB is running.');
        process.exit();
    });
    console.log('Database Connected');