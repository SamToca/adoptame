import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import cors from "cors";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from "./routes/mocks.router.js";

dotenv.config(); 
const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(process.env.MONGO_URL)
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/mocks", mocksRouter); 

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


//1) Instalamos swagger: https://swagger.io
//npm install swagger-jsdoc swagger-ui-express

//swagger-jsdoc: nos deja escribir la configuración en un archivo .yaml (tambien en un json) y a partir de ahi se genera un apidoc. 

//swagger-ui-express: nos permitira linkear una interfaz grafica para poder visualizar la documentacion. 

//2) Importamos los módulos: 
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from "swagger-ui-express"; 

//3) Creamos un objeto de configuracion: swaggerOptions

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de la App Adoptame", 
            description: "App dedicada a encontrar familias para los perritos o jirafas de la calle"
        }
    }, 
    apis: ["./src/docs/**/*.yaml"]
}

//4) Conectamos Swagger a nuestro servidor de Express: 

const specs = swaggerJSDoc(swaggerOptions);

app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs)); 