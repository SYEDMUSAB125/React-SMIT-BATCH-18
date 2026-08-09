import { useState } from "react";

import { ref, push } from "firebase/database";
import styles from "./Signup.module.css";
import { database } from "../../configuration/firebase";
import Swal from "sweetalert2";
function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
setFormData({
  ...formData,
  [e.target.name] : e.target.value
})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
await push(ref(database,"users"),formData)
     Swal.fire({
  title: "Signup Succesfull",
  text: "final last revision of firebase!",
  icon: "success"
});

    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
