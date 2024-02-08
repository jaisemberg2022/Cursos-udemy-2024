import {render,screen,fireEvent} from '@testing-library/react';
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
    });

    test('Debe de incrementar con el boton +1',()=>{
        render(
            <CounterApp value={value}/>
        );
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe de restar con el boton +1',()=>{
        render(
            <CounterApp value={value}/>
        );
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('Debe funcionar el boton de rest',()=>{
        render(
            <CounterApp value={150}/>
        );
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('restore'))
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        expect(screen.getByText(150)).toBeTruthy();
    })
 })