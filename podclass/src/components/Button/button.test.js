import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './';

// const testProps = {

// }

test('Check if button renders component renders', 
    ()=>{
    render(<Button/>)
    const buttonComponent = screen.getByTestId("button-component");
    expect(buttonComponent).toBeInTheDocument()
})