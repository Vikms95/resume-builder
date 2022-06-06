import { ChangeEvent, useContext } from "react";
import ResumeContext from "../../../context/";
import { FormSectionHeader, Input, SectionWrapper } from "../styles";

export default function Personal() {
  const { resume, setResume } = useContext(ResumeContext);

  let firstName, lastName, email, phone, homeCity, homeState;
  if (resume) {
    firstName = resume.personalItems.firstName;
  }

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume({
      ...resume,
      personalItems: {
        ...resume.personalItems,
        [name]: value,
      },
    });
  };
  return (
    <>
      <FormSectionHeader>Personal Information</FormSectionHeader>
      {resume && (
        <SectionWrapper flexD="column">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChangePersonal}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChangePersonal}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChangePersonal}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={handleChangePersonal}
          />
          <Input
            type="text"
            name="homeCity"
            placeholder="City"
            value={homeCity}
            onChange={handleChangePersonal}
          />
          <Input
            type="text"
            name="homeState"
            placeholder="State"
            value={homeState}
            onChange={handleChangePersonal}
          />
        </SectionWrapper>
      )}
    </>
  );
}
