describe("Our first Test!", () => {
  describe("Capital first letter function", () => {
    //our first test is that the function exist and is a function
    it("should be defined and should be a function", () => {
      expect(typeof capitalFirstLetter).toBe("function");
    });

    //test to see if it returns a capital name string
    it("should return a capital string when given a lowercase string", () => {
      expect(capitalFirstLetter("ragnar")).toBe("Ragnar");
      expect(capitalFirstLetter("luna")).toBe("Luna");
      expect(capitalFirstLetter("buddy")).toBe("Buddy");
    });

    //test if there is no argument given
    it("should return null if no argument is given", () => {
      expect(capitalFirstLetter()).toBeNull();
    });
    //test if there is a number as an argument
    it("should return the string 'please provide a name' when given a number", () => {
      expect(capitalFirstLetter(444)).toBe("please provide a name");
      expect(capitalFirstLetter(14)).toBe("please provide a name");
      expect(capitalFirstLetter(-4)).toBe("please provide a name");
    });
  });
});
