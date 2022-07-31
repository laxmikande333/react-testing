import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Axios from 'axios';
import AsyncAwait from './index';

// AsyncAwait
// Axios.get = jest.fn();

test('Testing without async and await', async () => {
    // Axios.get.mockResolvedValue({
    //     data: [1, 2]
    // });

    act(() => {
        render(
            <AsyncAwait />
        );
    })

    // screen.debug();
    // console.log(await screen.findByText('length: 100', {}, {
    //     timeout: 10000
    // }));
})