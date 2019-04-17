/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 */
/*import { bootstrapMicroframework } from 'microframework-w3tec';
import { expressLoader } from './src/loaders/expressLoader';

bootstrapMicroframework({
    loaders: [
        expressLoader,
    ],
})
    .then(() => console.log("Application is up and running."))
    .catch(error => console.log("Application is crashed: " + error));*/

import {bootstrapMicroframework} from "microframework";
import {expressLoader} from "./src/loaders/expressLoader";

bootstrapMicroframework([   
    expressLoader,
])
    .then(() => console.log("Application is up and running."))
    .catch(error => console.log("Application is crashed: " + error));