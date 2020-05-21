import { flipped } from './flipArgs';

describe('function that invokes `func` with arguments reversed.', () => {
  test('should execute functions with reverse arguments', () => {
    const power = flipped(Math.pow);
    expect(power(2,3)).toBe(9);
    expect(power(3,4)).toBe(64);

    const subtract = flipped((num1,num2)=>(num1-num2));
    expect(subtract(6,3)).toBe(-3);
    expect(subtract(3,10)).toBe(7);

    const division = flipped(function( num1, num2 ){
        if( num2 == 0 ){
          return null;
        }
        return num1/num2;
    });
    expect(division(6,0)).toBe(0);
    expect(division(0,51)).toBe(null);
    expect(division(3,51)).toBe(17);
    expect(division(4,51)).toBe(12.75);
  });
});
