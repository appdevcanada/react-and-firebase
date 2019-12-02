import React, { Component } from 'react';
import AppHeader from './AppHeader';
import ListView from './ListView'
import 'bootstrap/dist/css/bootstrap.css';
import Firebase from './initialize'

const db = Firebase.firestore();
var items = db.collection("items");


export default class NewItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      company: '',
      website: '',
      email: '',
      error: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateList = (e) => {
    e.preventDefault();
    // Add a new document with a generated id by Firebase.
    if (this.state.company.length > 0) {
      items.add({
        company: this.state.company,
        website: this.state.website,
        email: this.state.email
      })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      this.returnToList()
    } else {
      alert("Please input some valid text in Company's name");
    }
  }

  returnToList = (e) => {
    this.props.history.push("/");
    return <ListView />;
  }

  render() {
    return (
      <div id="list">
        <AppHeader />
        <div className="card bg-light m-2">
          <div className="card-body">
            <div className="card-item p-2">
              <form>
                <div className="form-group mb-4">
                  <label htmlFor="company" className="col-sm-2">Company</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" onBlur={this.handleChange} id="formcompany" name="company" placeholder="Type the company's name" autoFocus required></input>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="website" className="col-sm-2">Website</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" onBlur={this.handleChange} id="formurl" name="website" placeholder="Type the website URL"></input>
                  </div>
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="email" className="col-sm-2">e-Mail</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" onBlur={this.handleChange} id="formemail" name="email" placeholder="Type the main e-Mail"></input>
                  </div>
                </div>
                <div className="col-sm-10">
                  <button type="button" onClick={this.returnToList} className="btn btn-outline-danger mr-3">Cancel</button>
                  <button type="button" onClick={this.updateList} className="btn btn-outline-success">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.state.error &&
          <h3 className="error">{this.state.error}</h3>}
      </div>
    );
  }
}
