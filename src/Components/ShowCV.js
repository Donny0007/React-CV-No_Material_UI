const ShowCV = ( { resumeData } ) => {
  const { name, dob, address, objective, email, skills, degree, institute, score, companyName, numberOfYears, designation } = resumeData;
  return (
    <div className="container_cv">
      <h2 className="jumbotron text-center">Curriculum Vitae</h2>

      <div className="personal">
        <h4 className="header_cv"><strong><b> { name } </b></strong></h4>
        <p><i className="fa fa-birthday-cake"></i> {dob}</p>
        <p><i className="fa fa-map-marker"></i> {address}</p>
        <p><i className="fa fa-envelope"></i> {email}</p>
      </div>
      
      <div className="objective">
        <h4><b>Objectives</b></h4>
        <p> { objective } </p>
      </div>
      
      <div className="edu">
        <h4><b>Education</b></h4>
        <p><b> { degree } </b></p>
        <p> { institute } </p>
        <p> { score } </p>
      </div>
      
      <div className="skills">
        <h4><b>Skills</b></h4>
        <p> { skills } </p>
      </div>
      
      <div className="experience">
        <h4><b>Experience</b></h4>
        <p> { companyName } </p>
        <p> { numberOfYears } </p>
        <p> { designation } </p>
      </div>
    
    </div>
  );
};

export default ShowCV;
