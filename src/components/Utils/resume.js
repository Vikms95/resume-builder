import { nanoid } from "nanoid";

const resume = [
  {
    personalItems: {
      university: "FAU",
      degree: "Bachelors of Science ",
      workCity: "Boca Raton",
      major: "Computer Science",
      workState: "FL",
      graduationDate: "May 2020",
    },
  },
  {
    experienceItems: {
      id: nanoid(),
      employerName: "Apple",
      jobTitle: "Software Engineer",
      schoolCity: "Miami",
      schoolState: "FL",
      startDate: "March 2020",
      endDate: "April 2020",
    },
  },
  {
    educationItems: {
      id: nanoid(),
      university: "FAU",
      degree: "Bachelors of Science ",
      workCity: "Boca Raton",
      major: "Computer Science",
      workState: "FL",
      graduationDate: "May 2020",
    },
  },
];
export default resume;
