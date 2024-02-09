import { getGifs } from "../../helpers/getGifs"


describe('pruebas en funcion getGifs()', () => { 
    test("Debe retornar un arreglo de gifs",async()=>{
        const gifs = await getGifs('resident evil');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toStrictEqual({
            id: expect.any(String),
            title:  expect.any(String),
            url: expect.any(String)
        })
    })
 })