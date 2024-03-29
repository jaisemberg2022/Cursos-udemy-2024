import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useGetFetchsGif"



describe('Pruebas en hook useFetchGif', () => { 
    test('Debe retornar el estado inicial',()=>{
        const {result} = renderHook(()=> useFetchGifs('Resident evil 2'));
        const {images,isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test("Debe retornar un arreglo de imagesnes y el isLoading en false",async()=>{
        const {result} = renderHook(()=> useFetchGifs('Resident evil 2'));
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
        );
        const {images,isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
 })