describe("Our Pet Test", () => {
  describe("get pet name function", () => {
    //our first test is that the function exist and is a function
    it("should be defined and should be a function", () => {
      expect(typeof getPetNames).toBe("function");
    });

    it("should return an array of pet names when given an array of pets", () => {
      const pets = [
        {
          "pet name": "Ragnar",
          age: 4,
          owner: {
            ownerName: "Joshua",
            email: "joshua@joshua.com",
          },
          toys: ["ball", "bone"],
          bark: () => {
            console.log("woof woof");
          },
        },
        {
          "pet name": "Luna",
          age: 1,
          owner: {
            ownerName: "Rishi",
            email: "rishi@rishi.com",
          },
          toys: ["bell", "rope"],
        },
        {
          "pet name": "Buddy",
          age: 12,
          owner: {
            ownerName: "Joshua",
            email: "joshua@joshua.com",
          },
          toys: ["ball", "rope"],
          bark: () => {
            console.log("woof woof");
          },
        },
      ];
      expect(getPetNames(pets)).toEqual(["Ragnar", "Luna", "Buddy"]);
    });
  });
});
