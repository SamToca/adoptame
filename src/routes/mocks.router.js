import { Router } from "express";
const router = Router(); 

import mocksController from "../controllers/mocks.controller.js";

//Creamos una rutita para obtener mascotas simuladas: 
router.get("/mockingpets", mocksController.getMascotas); 

//Creamos otra rutita para obtener usuarios simulados
router.get("/mockingusers", mocksController.getUsuarios);

export default router; 