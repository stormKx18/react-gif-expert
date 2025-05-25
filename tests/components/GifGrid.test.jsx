import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test for <GifGrid />', () => {
    const category = 'spiderman'

    test('Component should match snapshot ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        const {container} = render(<GifGrid category={category}/>);
        expect(container).toMatchSnapshot();
    })

    test('Component should show loading message at start', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Loading ...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('Component should show items when they are loaded from useFetchGifs', () => {
        
        const gifs =[
            {
                id:'ABC',
                title: 'Wolverine',
                url: 'https://localhost/wolverine.jpg'
            },
                        {
                id:'DEF',
                title: 'Spongebob',
                url: 'https://localhost/spongebob.jpg'
            },
                        {
                id:'GHI',
                title: 'Arnold',
                url: 'https://localhost/Arnold.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>)
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(gifs.length)

    })
    
    
  
})
