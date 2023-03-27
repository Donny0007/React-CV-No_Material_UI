const ShowCV = ( { resumeData } ) => {
  const { experience, name, age, email, skills, education } = resumeData;
  return (
    <div className="container">
      <h3>Curriculum Vitae</h3>
      <h4>Personal Details</h4>
      <p> { name } </p>
      <p> { age } </p>
      <p> { email } </p>
      <h4>Education</h4>
      <p> { education } </p>
      <h4>Skills</h4>
      <p> { skills } </p>
      <h4>Experience</h4>
      <p> { experience } </p>
    </div>
  );
};

export default ShowCV;
