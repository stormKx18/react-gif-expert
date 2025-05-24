import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Tests for <AddCategory />', () => {

  test('Component should match snapshot ', () => {
    const {container} = render(<AddCategory onNewCategory={()=>{}}/>);
    expect(container).toMatchSnapshot();
  })

  test('Component should change the value of the text box', () => {
    const inputValue = 'Saitama';
    render(<AddCategory onNewCategory={()=>{}}/>);

    const inputBox = screen.getByRole('textbox');
    fireEvent.input(inputBox,{target:{value:inputValue}});
    expect(inputBox.value).toBe(inputValue);
    // screen.debug()
  })
  
  test('Component should call onNewCategory if the input has a value', () => {
    const inputValue    = 'Saitama';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}/>);

    const inputBox = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(inputBox,{target:{value:inputValue}});
    fireEvent.submit(form);
    
    expect(inputBox.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    // screen.debug()
  })
  
  test('Component should not call onNewCategory if the input is empty', () => {
    const inputValue    = '';
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory}/>);
    const inputBox = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(inputBox,{target:{value:inputValue}});
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();

  })
  
  
})
