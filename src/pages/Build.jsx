import React from "react";
import "../styles/Build.css";
import { Link } from "react-router-dom"; // Import Link
function Build() {
  return (
    <div>
      <form className="formContainer">
        <label>Insert width of your room</label>
        <input></input>
        <label>Insert length of your room</label>
        <input></input>
        <label>Insert width of your panel</label>
        <input></input>
        <label>Insert height of your panel</label>
        <input></input>
        <Link to="/result" className="submitButton">
          Calculate
        </Link>
      </form>
    </div>
  );
}

export default Build;
