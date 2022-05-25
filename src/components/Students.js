import React from 'react';

let Students = () => {
  return (
    <div>
      <h1 style={{display:"inline-block",position:"relative",left:"-550px"}}>Students Details</h1>
      <button style={{borderRadius: "10px",display:"inline-block",position:"relative",right:"-550px"}}>Add New Student</button>
      <br /><br /><br /><br />  
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
 </table>
    </div>
  );
}

export default Students;
