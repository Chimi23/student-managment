
import "./styles.css";
import { AddStudent } from "./AddStudent";
import { StudentList } from "./StudentList";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Student Detail</h3>
        </div>
      </div>
      <AddStudent />
      <StudentList />
    </div>
  );
}


export default App;
