import { map, filter, invert, merge, all, some } from './objectUtils';

describe('map', () => {
    test('should return Object', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500
      };
      expect(typeof map(obj, ([key, val]) => [key, val])).toEqual("object");
    });
    test('should take an object and transforms the (key, value) pair according to the callback function.', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500,
        'Mike'   : 50,
        'Akita'  : 20,
        'Elena'  : 500,
        'jim'    : 500
      };
      const tenTimesMoney = map(obj, ([key, val]) => [key.toUpperCase(), val * 10]);
      const groupedObject = map(obj, ([key, val]) => [val * 10, key.toUpperCase()]);
      expect(tenTimesMoney).toEqual({
        'PIYUSH' : 200,
        'ROBERT' : 5000,
        'MIKE'   : 500,
        'AKITA'  : 200,
        'ELENA'  : 5000,
        'JIM'    : 5000,
      });
      expect(groupedObject).toEqual({
        200 : ['PIYUSH','AKITA'],
        500 : 'MIKE',
        5000: ['ROBERT','ELENA','JIM']
      });
    });
  });

  describe('filter', () => {
    test('should return Object', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500
      };
      expect(typeof filter(obj, ([key, val]) => [key, val])).toEqual("object");
    });
    test('should filter on the basis of keys or values.', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500,
        'Mike'   : 50,
        'Akita'  : 20,
        'Elena'  : 500
      };
      const passedExam = filter(obj, ([key, val]) => val > 33);
      expect(passedExam).toEqual({
        'Robert' : 500,
        'Mike'   : 50,
        'Elena'  : 500
      });

      const obj2 = {
        200 : ['PIYUSH','AKITA'],
        500 : ['MIKE'],
        5000: ['ROBERT','ELENA'],
        300: ['MARK','JESSE','AMITABH'],
      }
      const groupedObject = filter(obj2, ([key, val]) => (val.length >= 2 && key > 200));
      expect(groupedObject).toEqual({
        5000: ['ROBERT','ELENA'],
        300: ['MARK','JESSE','AMITABH'],
      });

      const studentWiseMarks = {
        'Piyush' : {
          'Math' : 33,
          'English' : 52,
          'Science' : 64
        },
        'Robert' : {
          'Math' : 53,
          'English' : 72,
          'Science' : 24
        },
        'Mike'   : {
          'Math' : 83,
          'English' : 32,
          'Science' : 54
        },
        'Akita'  : {
          'Math' : 31,
          'English' : 95,
          'Science' : 24
        },
        'Elena'  : {
          'Math' : 93,
          'English' : 92,
          'Science' : 94
        }
      };
      const studentPassedInMath = filter(studentWiseMarks, ([key, value]) => value['Math'] >= 33);
      expect(studentPassedInMath).toEqual({
        'Piyush' : {
          'Math' : 33,
          'English' : 52,
          'Science' : 64
        },
        'Robert' : {
          'Math' : 53,
          'English' : 72,
          'Science' : 24
        },
        'Mike'   : {
          'Math' : 83,
          'English' : 32,
          'Science' : 54
        },
        'Elena'  : {
          'Math' : 93,
          'English' : 92,
          'Science' : 94
        }
      });
    });
  });

  describe('invert', () => {
    test('should return Object', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500
      };
      expect(typeof invert(obj, ([key, val]) => [key, val])).toEqual("object");
    });
    test('should invert key value pairs', () => {
      const obj = {
        'Piyush' : '20',
        'Robert' : '500',
        'Mike'   : '50',
        'Akita'  : '20',
        'Elena'  : '500',
        'Jim'    : '500'
      };
      const invertedObject = invert(obj);
      expect(invertedObject).toEqual({
        '20' : ['Piyush','Akita'],
        '50' : 'Mike',
        '500': ['Robert','Elena','Jim']
      });
      expect(invert(invertedObject)).toEqual(obj);
    });
  });

  describe('merge', () => {
    test('should return Object', () => {
      const obj1 = {
        'Piyush' : 20,
        'Robert' : 500
      };
      const obj2 = {
        '20' : ['Piyush','Akita'],
        '50' : 'Mike',
        '500': ['Robert','Elena','Jim']
      };
      expect(typeof merge(obj1, obj2)).toEqual("object");
    });
    test('should merge n number of objects into a single object.', () => {
      const obj1 = {
        'Piyush' : 20,
        'Robert' : 500,
      };
      const obj2 = {
        '20' : ['Piyush','Akita'],
        '50' : 'Mike',
        '500': ['Robert','Elena','Jim'],
      };
      const obj3 = {
        5000: ['ROBERT','ELENA'],
        300: ['MARK','JESSE','AMITABH'],
      };
      expect(merge(obj1, obj2)).toEqual({
        'Piyush' : 20,
        'Robert' : 500,
        '20' : ['Piyush','Akita'],
        '50' : 'Mike',
        '500': ['Robert','Elena','Jim'],
      });
      expect(merge(obj1, obj2, obj3)).toEqual({
        'Piyush' : 20,
        'Robert' : 500,
        '20' : ['Piyush','Akita'],
        '50' : 'Mike',
        '500': ['Robert','Elena','Jim'],
        5000: ['ROBERT','ELENA'],
        300: ['MARK','JESSE','AMITABH'],
      });
    });
  });

  describe('all', () => {
    test('should return Boolean', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500
      };
      expect(typeof all(obj, ([key, val]) => [key, val])).toEqual("boolean");
    });
    test('should return true if all key, value pair gets true on the callback', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500,
        'Mike'   : 50,
        'Akita'  : 20,
        'Elena'  : 500,
        'Jim'    : 500
      };
      expect(all(obj, ([key, val]) => val > 49)).toEqual(false);
      expect(all(obj, ([key, val]) => val > 10)).toEqual(true);
      expect(all(obj, ([key, val]) => (val % 10 === 0))).toEqual(true);
    });
  });

  describe('some', () => {
    test('should return Boolean', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500
      };
      expect(typeof some(obj, ([key, val]) => [key, val])).toEqual("boolean");
    });
    test('should return true if all key, value pair gets true on the callback', () => {
      const obj = {
        'Piyush' : 20,
        'Robert' : 500,
        'Mike'   : 50,
        'Akita'  : 20,
        'Elena'  : 500,
        'Jim'    : 500
      };
      expect(some(obj, ([key, val]) => val > 49)).toEqual(true);
      expect(some(obj, ([key, val]) => val > 10)).toEqual(true);
      expect(some(obj, ([key, val]) => (val % 10 === 0))).toEqual(true);
      expect(some(obj, ([key, val]) => (val % 3 === 0))).toEqual(false);
      expect(some(obj, ([key, val]) => (key.length === 3))).toEqual(true);
      expect(some(obj, ([key, val]) => val < 10)).toEqual(false);
    });
  });
  