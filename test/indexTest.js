require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("Name", () => {
  it('returns "Melly"', () => {
    expect(name).toEqual("Melly");
  });
});



/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan')
    })
  })




*/describe("Height", () => {
  it("is less than 40", () => {
    expect(height).toBeLessThan(40);
  });
});




describe("Height", () => {
  it("is less than 40", () => {
    expect(height).toBeLessThan(40);
  });
});
https://moringa.instructure.com/courses/629/assignments/44660?module_item_id=94060#:~:text=describe(%22Height%22%2C%20()%20%3D%3E%20%7B%0A%20%20it(%22is%20less%20than%2040%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20expect(height).toBeLessThan(40)%3B%0A%20%20%7D)%3B%0A%7D)%3B



  describe('Height', () => {
    it('is less than 40', () => {
      expect(height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})
*/

// The code below ensures that students who are using CodeGrade will get credit 
// for the code-along in Canvas; you can disregard it.

describe('', () => {
  describe('', () => {
    it('', () => {
      return true;
    })
  })
})
