import {faker} from "@faker-js/faker"; 
import { createHash } from "../utils/index.js";

class MockingService {
    static async generarMockingUsuarios(num) {
        const usuarios = []; 
        for (let i = 0; i < num; i++) {
            usuarios.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"), 
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return usuarios; 
    }

    static async generarMockingMascotas(num) {
        const mascotas = []; 
        for (let i = 0; i < num; i++) {
            mascotas.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(), 
                adopted: false, 
                birthDate: faker.date.past(), 
                image: "https://via.placeholder.com/150"
            })
        }
        return mascotas; 
    }
}

export default MockingService; 