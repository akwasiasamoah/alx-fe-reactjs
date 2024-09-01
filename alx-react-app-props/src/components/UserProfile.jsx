import { useContext } from "react"; // Step 1 and 2
import { UserContext } from "../UserContext"; // Step 2 (Adjust the import path as needed)

const UserProfile = () => {
  const userData = useContext(UserContext); // Access the context

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{userData.age}</span>
      </p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
