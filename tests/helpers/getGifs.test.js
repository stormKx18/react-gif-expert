import { getGifs } from "../../src/helpers/getGifs"

describe('Tests for getGifs helper function', () => {
  
    const category = 'spiderman'

    test('getGifs should return an array of 5 elements ', async () => {
      const gifs = await getGifs(category);
      expect(gifs.length).toBeGreaterThan(0);
      expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
      })
    })
    

})
