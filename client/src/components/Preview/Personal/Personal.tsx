import { useContext } from "react";
import styled from "styled-components";
import ResumeContext from "../../../context/";
import { Item } from "../styles";

export default function Personal() {
  const { resume } = useContext(ResumeContext);

  const { firstName, lastName, email, phone, homeCity, homeState } =
    resume.personalItems;
  return (
    <section>
      <FullName>
        {firstName} {lastName}
      </FullName>
      <ContactInfoWrapper>
        <Item>{email}</Item>
        <Item>❖</Item>
        <Item>{phone}</Item>
        <Item>❖</Item>
        <Item>
          {homeCity}, {homeState}
        </Item>
      </ContactInfoWrapper>
      <hr />
    </section>
  );
}

const FullName = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 22px;
`;
