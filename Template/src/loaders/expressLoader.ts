import { Application } from 'express';
//import { MicroframeworkSettings, MicroframeworkLoader } from 'microframework-w3tec';
import { env } from '../../env';
import { createExpressServer } from 'routing-controllers';
import {MicroframeworkSettings} from "microframework";

export function expressLoader (settings: MicroframeworkSettings){
        //const connection = settings.getData('connection');
        const expressApp: Application = createExpressServer({

            cors: true,
            classTransformer: true,
            defaultErrorHandler: false,
        });
        //const routes: any = Routes;
        //Object.keys(routes).forEach(routePath => expressApp.get(routePath, routes[routePath]));

        console.log("Port Number " +env.app.port);
        const server = expressApp.listen(env.app.port);
        settings.setData('express_server', server);

       // settings.setData('express_app', expressApp);
}