import React, { useEffect } from "react";

// post class component ile data getirme
export class Postlar extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = { postList: [] };
  } // constructor sonu
  //load Data

  componentDidMount() {
    fetch(this.props.url)
      .then((posts) => {
        return posts.json();
      })
      .then((response) => {
        this.setState({postList: response},()=>{})
      }); // fetch sonu
  }
  render() {
    return (
      <table className="table" hidden={true} id="postTable">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">başlık</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {
              this.state.postList.slice(0, 50).map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                ); // return sonu
              }) // todo sonu
            }
          </React.Fragment>
        </tbody>
      </table>
    ); // return sonu
  } // render sonu
} // post class component sonu
