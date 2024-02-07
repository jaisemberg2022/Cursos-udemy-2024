import {getHeroeById,getHeroesByOwner} from '../../base-pruebas/08-imp-exp' 

describe("pruabes en 08-imp-exp",()=>{

    test('getHeroeById debe retornar un heroe por id', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        )
    });

    test('getHeroeById debe retornar un undefiend si no existe', () => { 
        const id = 10;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes de DC',()=>{
        const owner = 'Marvel';
        const heros = getHeroesByOwner(owner);
        console.log
        expect(heros.length).toBe(2);
       expect(heros).toEqual(heros.filter((heroe) => heroe.owner === owner ))
    })
})