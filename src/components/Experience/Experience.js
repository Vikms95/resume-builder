import React from "react";

export default function Experience(props) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    props.experienceValues;
  return (
    <section className="resume-section">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <hr />
      <div className="section-top">
        <p className="section-top-title">{employerName}</p>
        <p className="section-top-date">
          {startDate} – {endDate}
        </p>
      </div>
      <div className="section-bottom">
        <p className="section-bottom-title">{jobTitle}</p>
        <p ckassName="section-bottom-location">
          {workCity}, {workState}
        </p>
      </div>
    </section>
  );
}
