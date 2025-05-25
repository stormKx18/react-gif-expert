import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests on custom hook useFetchGifs', () => {
  
    test('useFetchGifs should return initial state', () => {
        const category='spiderman'

        const { result } = renderHook(()=>useFetchGifs(category))
        const {images, isLoading} =result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
        
    })

        test('useFetchGifs should return images as an array of items and isLoading as false', async () => {
        const category='spiderman'

        const { result } = renderHook(()=>useFetchGifs(category))

        await waitFor(
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} =result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
                
    })
    
})
