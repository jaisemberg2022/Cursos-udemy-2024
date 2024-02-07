import {getImagen} from '../../base-pruebas/11-async-await'

describe('pruebas en 10 async await', ()=>{
    test('getImagen debe retornar el url de una imagen', async() => { 
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')

     })
})