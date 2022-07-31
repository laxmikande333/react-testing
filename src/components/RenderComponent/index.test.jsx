import React from 'react';
import { render } from '@testing-library/react';
import RenderComponent from './index';

// RenderComponent

test('Rendering RenderComponent Component', () => {

    render(
        <RenderComponent />
    );

});

// with props
// test('Rendering RenderComponent Component', () => {

//     render(
//         <RenderComponent 
//             name='React Unit Testing'
//         />
//     );

// });


// some other case

// beforeEach(() => {
//     render(
//         <RenderComponent
//             name='React Unit Testing'
//         />
//     );
// });

// test('Test 1', () => {
//     console.log('doinng something');
// })

// test('Test 2', () => {
//     console.log('doinng something');
// })