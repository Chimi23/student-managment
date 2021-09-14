import React, { useEffect, useState } from "react";
import axios from "axios";


const StudentDetail = (props) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">{props.student.full_name}</li>
      <li class="list-group-item">{props.student.age}</li>
      <li class="list-group-item">{props.student.sex}</li>
      <li class="list-group-item">{props.student.final_score}</li>
      <li class="list-group-item">{props.student.result}</li>

    </ul>
  );
};

export const StudentList = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);

  const [studentList, setStudentList] = useState();

  const [selectedStudent, setSelectedStudent] = useState();

  const fetchStudentList = async () => {
    await axios
      .get(`http://localhost:3000/Student`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function (response) {
        // handle success
        setStudentList(response.data);
        // setWeatherData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    fetchStudentList();
  }, []);
  
  
   
const deleteStudent = async _id => {
    await axios
      .delete(`http://localhost:3000/Student/${_id}`);
      fetchStudentList();

  };
  
  return (
    <div>
      <div class="row">
        <div className="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full_Name</th>
                <th scope="col">Age</th>
                <th scope="col">sex</th>
                <th scope="col">Final Score</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              {studentList &&
                studentList.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.full_name}</td>
                      <td>{item.age}</td>
                      <td>{item.sex}</td>
                      <td>{item.final_score}</td>
                      <td>{item.result}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setSelectedStudent(item);
                            setDisplayDetail(true);
                          }}
                        >
                          View
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setSelectedStudent(item);
                            setDisplayDetail(true);
                           
                          }}
                        >
                          Edit
                        </button>
                        
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            deleteStudent(item._id);
                          }}
                        >
                        Delete
                        </button>
                        
                        <button className="btn btn-info">Results</button>
                        
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h2>Details</h2>

          {displayDetail && (
            <>
              <StudentDetail student={selectedStudent} />
              <button
                className="btn btn-sm btn-warning"
                onClick={() => setDisplayDetail(!displayDetail)}
              >
                Close
              </button>
            </>
          )}
        </div>
        
      </div>
      <br />
    </div>
  );
};