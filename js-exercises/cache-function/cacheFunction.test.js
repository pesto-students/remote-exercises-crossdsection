import { cacheFunction } from './cacheFunction';

describe('cacheFunction', () => {
  it('should return a function', () => {
    expect(typeof cacheFunction()).toBe('function');
  });
  it('The cached function should return the correct result', () => {
    const foo = x => (x * x);
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5)).toBe(25);
  });
  it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    expect(foo).toHaveBeenCalledTimes(2);
  });
  it('Extra Test Cases', () => {
    const foo = jest.fn().mockImplementation(x => 2 * x);
    const myCachedFunction = cacheFunction(foo);
    expect(myCachedFunction(1)).toBe(2);
    expect(myCachedFunction(2)).toBe(4);
    expect(myCachedFunction(3)).toBe(6);

    const foo1 = jest.fn().mockImplementation((y) => 3 * myCachedFunction(y));
    const myCachedFunction1 = cacheFunction(foo1);
    expect(myCachedFunction1(1)).toBe(6);
    expect(myCachedFunction1(2)).toBe(12);
    expect(myCachedFunction1(3)).toBe(18);

    expect(foo).toHaveBeenCalledTimes(3);
    expect(foo1).toHaveBeenCalledTimes(3);

    const foo2 = jest.fn().mockImplementation((...args) => {
      var sum = 0;
      for( var i = 0; i < args.length; i++ ){
        sum += args[i];
      }
      return sum;
    });
    const myCachedFunction2 = cacheFunction(foo2);
    expect(myCachedFunction2(1,2)).toBe(3);
    expect(myCachedFunction2(1,2)).toBe(3);
    expect(myCachedFunction2(1,5,6,2)).toBe(14);
    expect(myCachedFunction2(1,5,6,2)).toBe(14);
    expect(myCachedFunction2(1,6,5,2)).toBe(14);

    expect(foo2).toHaveBeenCalledTimes(3);
  });
});
