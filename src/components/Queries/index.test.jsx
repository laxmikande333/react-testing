import React from 'react';
import { render, screen } from '@testing-library/react';
import Queries from './index';


test('Testing Queries', () => {

        render(
            <Queries />
        );
    expect(screen.getByText('Queries')).toBeInTheDocument();
});