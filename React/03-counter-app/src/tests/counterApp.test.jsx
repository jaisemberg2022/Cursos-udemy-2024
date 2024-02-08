import {render,screen} from '@testing-library/react';
import { CounterApp } from '../counterApp';

describe('pruebas en <counterapp/>', () => { 
    const value = 10;
    test('Debe hacer match con snapshot',()=>{
        const {container} = render(
            <CounterApp value={value}/>
        );
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor en 100',()=>{
        render(
            <CounterApp value={100}/>
        );
        expect(screen.getByText(100)).toBeTruthy();
    })
 })