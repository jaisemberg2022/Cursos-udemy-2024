import {render,screen} from '@testing-library/react'
import {FirstApp} from '../FirstApp'
import { teal } from '@mui/material/colors';


describe('pruebas en <FirstApp>', () => { 
    const tittle = 'Hola soy goku';
    const subtittle ='subtitulo'

    test('Debe hacer match con snapshot', () => { 
        const {container} = render(
            <FirstApp tittle={tittle}/>
        )
        expect(container).toMatchSnapshot();
    });
    
    test('Debe mostrar el mensaje hola soy goku',()=>{
        render(<FirstApp tittle={tittle}/>)
        expect(screen.getByText(tittle)).toBeTruthy();       
    });

    test('Debe de mostrar el titulo en un h1',()=>{
        render(<FirstApp tittle={tittle}/>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(tittle);
    });

    test('Debe de mostrar el subtitulo enviado por props',()=>{
        render(<FirstApp tittle={tittle} subtitle={subtittle}/>)
        expect(screen.getAllByText(tittle)).toBeTruthy();       
        
    }); 

 })