/* eslint-disable react/prop-types */
function UserProfile(props) {
  return (
    <div style={{ padding: '10px', border: 'solid #ddd', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>
        <span style={{ color: 'blue', fontWeight: 'bold' }}>{props.name}</span>
      </h2>
      <p>
        <span style={{ color: '#2c3e50' }}>Age: </span>
        <span style={{ fontStyle: 'italic' }}>{props.age}</span>
      </p>
      <p>
        <span style={{ color: '#7f8c8d' }}>Bio: </span>
        <span>{props.bio}</span>
      </p>
    </div>
  );
}

export default UserProfile;

  