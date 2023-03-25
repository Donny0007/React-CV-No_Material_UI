import React from 'react';

const ShowCV = ( { PersonalDetails } ) => {
  const { name, age, email } = PersonalDetails;
  return (
    <div className="jumbotron">
      <h1>CV</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default ShowCV;
