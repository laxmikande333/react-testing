// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Matchers from './index';

// Matchers

test('Testing Matchers', () => {
    // render(
    //     <Matchers />
    // );

    console.log(2 === 2);
    expect(2 === 2).toBe(true);
    // expect(null).toBeNull();
    // expect(47).toBeTruthy();

    // making sure searching element should be in dom
    // expect(screen.getByText('Matchers Components')).toBeInTheDocument();
});