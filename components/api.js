import React, { Component } from 'react';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';

class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10&gender=female")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            people: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, people } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
          {people.map(peps => (
            <tr>
              <td><img src={peps.picture.medium}/></td>
              <td>
                <p>{peps.name.first} {peps.name.first} </p>
                <p>{peps.email}</p>
              </td>
            </tr>
          ))}
        </table>
      );
    }
  }
}
export default API;
