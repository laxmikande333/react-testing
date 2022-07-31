import React from 'react';
import { render, screen } from '@testing-library/react';
import Screen from './index';

// Screen

// screen.debug();

/**
 * proving test function is asynchronous and after test 
 * screen will become empty
 */
// afterEach(() => {
//     screen.debug();
// });

test('Test-1', () => {
    render(
        <Screen />
    )
    screen.debug();
})

// screen.debug();