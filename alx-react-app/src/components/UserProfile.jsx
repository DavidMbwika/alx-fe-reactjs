/* eslint-disable react/prop-types */
const UserProfile = (props) => {
    return (
      <div>
        <h2 style={{ backgroundColor: 'navy', color: 'blue', textAlign: 'center',fontSize:'23px'}} >{props.name}</h2>
        <p style={{ backgroundColor: 'navy', color: 'blue', textAlign: 'center',fontSize:'23px'}} >Age: {props.age}</p>
        <p style={{ backgroundColor: 'navy', color: 'blue', textAlign: 'center',fontSize:'23px'}} >Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;
  