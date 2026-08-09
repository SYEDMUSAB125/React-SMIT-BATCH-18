
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../configuration/firebase";
import "./UsersTable.css";
import { PacmanLoader } from "react-spinners";
import {IoTrashBinSharp} from "react-icons/io5"
function  UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, "users");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val(); 
        console.log("the data is",data)
      if (data) {
        console.log("this is for learning",Object.entries(data) )
        const usersArray = Object.entries(data).map(([id, user]) => ({
          id,
          ...user,
        }));
console.log(usersArray)
        setUsers(usersArray);
      } else {
        setUsers([]);
      }
    });


  }, []);

const handleDelete = (index)=>{
  console.log(index)
  const newArr = [...users]
newArr.splice(index,1)
console.log(newArr)
setUsers(newArr)
}


  return (
    <div className="users-container">
      <h2>Users List</h2>

      <table className="users-table" >
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody  >
            
          {
            users.length == 0 ? <tr className="loader"  rowspan="10" >
              <PacmanLoader  />
            </tr> : <>
            {users.map((user,index) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.password} < IoTrashBinSharp color="red" onClick={()=>handleDelete(index)} />
              
              </td>
              
            </tr>
          ))}
            </>
          }
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;



.users-container {
  width: 90%;
  max-width: 1100px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.users-container h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #222;
}

/* Table */
.users-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow: hidden;
}

/* Table Header */
.users-table thead {
  background-color: #4f46e5;
  color: white;
}

.users-table th {
  padding: 15px;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
}

/* Table Body */
.users-table td {
  padding: 14px 15px;
  border-bottom: 1px solid #e5e7eb;
  color: #333;
  font-size: 14px;
}

/* Alternate rows */
.users-table tbody tr:nth-child(even) {
  background-color: #f8f9ff;
}

/* Hover effect */
.users-table tbody tr:hover {
  background-color: #eef2ff;
  transition: 0.2s;
}

/* Remove border from last row */
.users-table tbody tr:last-child td {
  border-bottom: none;
}
.loader{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
 width: 50vw;
}

/* Responsive table */
@media (max-width: 768px) {
  .users-container {
    width: 95%;
    overflow-x: auto;
  }

  .users-table {
    min-width: 700px;
  }
}




