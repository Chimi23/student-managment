import React, { useState } from "react";
import axios from "axios";

export const AddStudent = () => {
  const [formToggle, setFormToggle] = useState(false);

  const [full_name, setName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [final_score, setScore] = useState();

  const saveStudent = async () => {
    if (full_name === "" && age === "" && sex === "" && final_score === "") {
      alert("Please enter name and age");
    } else {
      await axios
        .post("http://localhost:3000/student", {
          full_name: full_name,
          age: age,
          
          final_score: final_score
        })
        .then(function (response) {
          alert("saved Successfully");
          window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          alert("Error saving Student detail");
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div class="row">
        <div className="col-md-12">
          <div
            style={{
              textAlign: "right"
            }}
          >
            <button
              className="btn btn-warning"
              onClick={() => setFormToggle(true)}
            >
              New
            </button>
          </div>
        </div>
      </div>
      <br />
      {formToggle && (
        <div class="row">
          <div className="col-md-12">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Male / Female"
                  onChange={(e) => setSex(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Final Sore"
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>
              <div class="col text-right">
                <button
                  className="btn btn-success"
                  onClick={() => saveStudent()}
                >
                  Submit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => setFormToggle(!formToggle)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};