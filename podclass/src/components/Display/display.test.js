import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Display from './';

const testProps = {
    addCheckListItem: jest.fn() 
}

test('Check that toggle checkbox works when clicked', ()=>{
    const { getByTestId } = render (<Display{...testProps}/>);
    const toggle = getByTestId('check-toggle');
    fireEvent.click(toggle);
    expect(testProps.addCheckListItem).toHaveBeenCalled()
});