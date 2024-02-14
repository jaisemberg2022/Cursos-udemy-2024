import {renderHook,act} from '@testing-library/react'
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
    });

    test('Debe de incrementar el contador',()=>{
        const {result}= renderHook(()=> useCounter(100));
        const {counter,decrement,increment,restore} = result.current;  

        act(()=>{
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103)
    });

    test('Debe de decrementar el contador',()=>{
        const {result}= renderHook(()=> useCounter(100));
        const {counter,decrement,increment,restore} = result.current;  

        act(()=>{
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97)
    });

    test('Debe de restaurar el contador',()=>{
        const {result}= renderHook(()=> useCounter(100));
        const {counter,decrement,increment,restore} = result.current;  

        act(()=>{
            restore()
        });

        expect(result.current.counter).toBe(100)
    });


 })