import { getSaludo } from "../../base-pruebas/02-template-string";

describe("pruebas en 02-template-string",()=>{
    test("getSaludo debe retornar 'Hola fermando'", () => { 
        const name = 'Fernado';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
     });
});