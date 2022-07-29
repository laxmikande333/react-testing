import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './index';


test('test', () => {
    render(
        <Component />
    );
    screen.debug();
});