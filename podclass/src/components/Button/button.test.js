import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './';

const testProps = {
    handleClick = jest.fn(),
 };

test('Check if button component renders', 
    ()=>{
    render(<Button/>)
    const buttonComponent = screen.getByTestId("button-component");
    expect(buttonComponent).toBeInTheDocument()
})

test('Button calls the handleClick function when clicked', 
    ()=>{
    const { getByTestId } = render (<Button{...testProps}/>);
    const button = getByTestId('button-component');
    fireEvent.click(button);
    expect(testProps.handleClick).toHaveBeenCalled();
})