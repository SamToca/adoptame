import MockingService from "../services/mocking.js";

const getMascotas = async (req, res) => {
    const mascotas = await MockingService.generarMockingMascotas(100); 
    res.send({status: "success", payload: mascotas}); 
}

const getUsuarios = async (req, res) => {
    const usuarios = await MockingService.generarMockingUsuarios(50);
    res.send({status: "success", payload: usuarios}); 
}

export default {
    getMascotas,
    getUsuarios
}