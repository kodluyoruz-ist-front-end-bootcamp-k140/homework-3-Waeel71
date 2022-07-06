// function ile todo listesi getirme

// importlar
import React, { useEffect, useState } from "react";

//render body
export function RenderBody(props) {
  //hooks
  const [todo, setTodo] = useState([]);

  //load data
  useEffect(() => {
    fetch(props.url)
      .then((todos) => {
        return todos.json();
      })
      .then((response) => {
        setTodo(response);
      }); // fetch sonu
  }); //useEffect sonu
  return (
    <table className="table" hidden={true} id="todoTable">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">başlık</th>
          <th scope="col">yapılma durumu</th>
        </tr>
      </thead>
      <tbody>
        <React.Fragment>
          {
            todo.slice(0, 50).map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.completed ? "yapılmış" : "yapılmamış"}</td>
                </tr>
              ); // return sonu
            }) // todo sonu
          }
        </React.Fragment>
      </tbody>
    </table>
  ); // end return
} // end render body
