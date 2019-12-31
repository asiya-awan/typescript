var userData = {
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
var userName = userData.userName, companyName = userData.work.companyName, _a = userData.work.address, city = (_a === void 0 ? { city: "no city" } : _a).city, //default param
_b = userData.hobbies, hone = _b[0], hthree = _b[2], first = userData.experiences[0];
console.log("userName: " + userName + ", companyName: " + companyName + ", city: " + city + ", hobbies: " + hone);
console.log("firstExperience: " + first.companyName + ", " + first.jobTitle);
