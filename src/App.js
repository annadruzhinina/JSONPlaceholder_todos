import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=100'")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Todos List</h1>
      {isLoading ? (
        <div className="loader">...</div>
      ) : (
        <div className="table-container">
          <table className="centered-table">
            <thead>
              <tr>
                <th>UserID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(({ userId, id, title, completed }) => (
                <tr key={id}>
                  <td>{userId}</td>
                  <td>{title}</td>
                  <td>{completed ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
