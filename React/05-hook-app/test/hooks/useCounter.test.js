import {renderHook} from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'


describe('first', () => { 
    test('Debe retornar los valores pordefecto', () => { 
        const {result}= renderHook(()=> useCounter());
        const {counter,decrement,increment,restore} = result.current;
        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(restore).toEqual(expect.any(Function));
    });

    test("Debe de generar el counter con el valor de 1000",()=>{
        const {result}= renderHook(()=> useCounter(100));
        const {counter} = result.current;
        expect(counter).toBe(100);
    })

 })