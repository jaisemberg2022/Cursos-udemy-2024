import {render} from '@testing-library/react'
import {FirstApp} from '../FirstApp'
import { teal } from '@mui/material/colors';


describe('pruebas en <FirstApp>', () => { 
    test('debe de hacer match con el snapshot', () => { 
        const tittle = 'Hola soy goku ';
        const {conatiner} = render(<FirstApp tittle={tittle}/>);
        expect(conatiner).toMatchSnapshot();
     });

     test('deve mostrar el titulo en h1', ()=>{
        const tittle = 'Hola, soy goku ';
        const {container,getByText} = render(<FirstApp tittle={tittle} />);

        const h1 = container.querySelector('h1')  
        // expect(getByText(title)).toBeTruthy();
        expect(h1.innerHTML).toBe(tittle)
     })
 })