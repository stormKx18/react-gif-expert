import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";


describe('Tests on <GifExpertApp />', () => {
    
    test('Component should match snapshot ', () => {
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })

    test('Component should include the name of the application', () => {
        render(<GifExpertApp />)
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    })

    test('Component should show new category when a new category is added', () => {
        render(<GifExpertApp />)

        const inputValue = 'test';
        const inputBox = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(inputBox,{target:{value:inputValue}});
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
        expect(screen.getAllByRole('heading',{level:3}).length).toBe(2);
    })

    test('Component should not show duplicated categories', () => {
        render(<GifExpertApp />)

        const inputValue = 'test';
        const inputBox = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(inputBox,{target:{value:inputValue}});
        fireEvent.submit(form);

        fireEvent.input(inputBox,{target:{value:inputValue}});
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).toBe(1);
    })
    
    
    
})
