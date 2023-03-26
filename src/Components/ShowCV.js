const ShowCV = ( { resumeData } ) => {
  const { experience } = resumeData;
  return (
    <div>
      <h5>Curriculum Vitae</h5>
      <h7>Experience</h7>
      <p> { experience } </p>
    </div>
  );
};

export default ShowCV;
