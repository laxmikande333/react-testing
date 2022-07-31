import React from 'react';
import { render, screen } from '@testing-library/react';
import Queries from './index';

// Queries

test('Testing Queries', async () => {

        render(
            <Queries />
        );
    expect(screen.getByText('Queries')).toBeInTheDocument();
});