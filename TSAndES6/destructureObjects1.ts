const userData = {
  userName: "Max",
  age: 30,
  hobbies: ["Cooking", "Painting", "Coding"],
  experiences: [
    {
      companyName: "Gexton",
      jobTitle: "Web Dev",
      numberOfYearsWorked: 4
    },
    {
      companyName: "Fahim School System",
      jobTitle: "O Level Computer Teacher",
      numberOfYearsWorked: 1
    }
  ],
  work: {
    companyName: "Neovation",
    numOfYearsWorking: 3,
    address: {
      city: "Winnipeg",
      country: "Canada",
      postalCode: "R3T3A1"
    }
  }
};

const {
  userName,
  work: { companyName },
  work: { address: { city } = { city: "no city" } }, //default param
  hobbies: [hone, , hthree],
  experiences: [first]
} = userData;

console.log(
  `userName: ${userName}, companyName: ${companyName}, city: ${city}, hobbies: ${hone}`
);

console.log(`firstExperience: ${first.companyName}, ${first.jobTitle}`);
