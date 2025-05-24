import { fireEvent, render, screen  } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Tests for <GifItem />', () => {

    const title= 'Test Title'
    const url  = 'https://www.awewomewebpage.comp/'

    test('Component should match snapshot ', () => {
      const {container} = render(<GifItem title={title} url={url}/>)
      expect(container).toMatchSnapshot();
    })
    
    test('Component should show the title ', () => {
      render(<GifItem title={title} url={url}/>)
      expect(screen.getByText(title)).toBeTruthy();
    })

    test('Title should not react to click ', () => {
        render(<GifItem title={title} url={url}/>)
        fireEvent.click(screen.getByText(title))
        //screen.debug()
        expect(screen.getByText(`${title}`)).toBeTruthy();
    })

    test('Component should show image with URL and ALT text', () => {
        render(<GifItem title={title} url={url}/>)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url);    
        // expect(screen.getByRole('img').alt).toContain(title); 
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toContain(title);   
           
    })


    
    
  
})

