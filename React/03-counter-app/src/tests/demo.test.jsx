
describe('primera prueba',()=>{
    test('should first', () => { 
        //1.inicializacion
        const message1 = "Hola mundo";
        //2.estimulo
        const message2 =  message1.trim();
        //3.Observar el comportamiento
        expect(message1).toBe(message2);
    }); 
});