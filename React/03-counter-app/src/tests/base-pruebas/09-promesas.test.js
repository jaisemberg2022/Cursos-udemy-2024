import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';

describe('pruebas a archivo 09',(done)=>{

    test('getHeroeByIdAsync debe retornar un heroe', () => { 
        const id = 1;
        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toEqual({
                id:id,
                name:'Batman',
                owner:'DC'
            })
            done();
        })
    });

    test('getHeroeByIdAsync debe obtener un error si hero no existe', () => { 
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch(error =>{
            expect(error).toBe(`No se pudo encontrar el heroe ${id}`)
            done();
        })
      
    });
})

