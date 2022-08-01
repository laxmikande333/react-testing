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
    
    

import React from "react";
import { render } from "@testing-library/react";
import React from 'react'
import { render } from '@testing-library/react'

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}


describe("Testing Hello world component ", () => {

  test("Test if the heading is pesent or not ", async () => {
    await act(async () => {
      const component = render(<HelloWorld />)
      const n = null;
      let x = { z: true };
      let y = { z: true };
      const z = 0;
      const player1 = { name: 'John', age: 25 };
      const player2 = { name: 'John', age: 25 };
      const players = [player1, player2];


      // toBe and toEqual is same for primitive types like undefined, 4, 'text', true


      expect(x).toBe(y); // FALSE
      expect(x).toEqual(y); // TRUE
      expect(2 + 2).toBe(4);


      function getFirstPlayer() {
        return players[0];
      }

      test('getFirstPlayer', () => {
        // USING TOBE
        expect(getFirstPlayer())
          .toBe(player1); // passes

        expect(getFirstPlayer())
          .not.toBe(player2); // passes

        // USING TOEQUAL
        expect(getFirstPlayer())
          .toEqual(player1); // passes

        expect(getFirstPlayer())
          .not.toEqual(player2); // fails
      });

      for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(5);
        }
      }

      // Truthiness

      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();


      // Numbers

      const value = 2 + 2;
      expect(value).toBeGreaterThan(3);
      expect(value).toBeGreaterThanOrEqual(3.5);
      expect(value).toBeLessThan(5);
      expect(value).toBeLessThanOrEqual(4.5);
      expect(value).toBe(4);
      expect(value).toEqual(4);
      expect(value).toBeCloseTo(0.3);

      // Strings

      expect('jest').not.toMatch(/I/);
      expect('non-stop').toMatch(/stop/);
      expect('How are you?').toEqual(expect.not.stringContaining(" Hi team!"));


      // Arrays and iterables

      const playersList = ['player1','player2','player3'];

      expect(playersList).toContain('player2');
      expect(new Set(playersList)).toContain('player2');





      expect(value).toEqual(1);
      expect(Calculate).toBeCalledTimes(2);
      component.debug()


    })
  })
})



      // Truthiness

       toBeNull();
       toBeDefined();
       not.toBeUndefined();
       not.toBeTruthy();
       toBeFalsy();

      // Numbers

       toBeGreaterThan(3);
       toBeGreaterThanOrEqual(3.5);
       toBeLessThan(5);
       toBeLessThanOrEqual(4.5);
       toBe(4);
       toEqual(4);
       toBeCloseTo(0.3);

      // Strings

      not.toMatch(/I/);
      toMatch(/stop/);
      expect(val).toEqual(expect.not.stringContaining(" Hi team!"));

      // Arrays and iterables

      toContain(value);
      toContain(value);




});
