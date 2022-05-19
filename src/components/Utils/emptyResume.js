import { nanoid } from "nanoid";

const emptyResume = [
  {
    personalItems: {
      university: "",
      degree: "",
      workCity: "",
      major: "",
      workState: "",
      graduationDate: "",
    },
  },
  {
    experienceItems: {
      id: nanoid(),
      employerName: "",
      jobTitle: "",
      schoolCity: "",
      schoolState: "",
      startDate: "",
      endDate: "",
    },
  },
  {
    educationItems: {
      id: nanoid(),
      university: "",
      degree: "",
      workCity: "",
      major: "",
      workState: "",
      graduationDate: "",
    },
  },
];
export default emptyResume;
