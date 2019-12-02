import React, { Component } from 'react';
import AppHeader from './AppHeader';
import ListItem from './ListItem'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Firebase from './initialize'

const db = Firebase.firestore();
var items = db.collection("items");
var itemList = [];
var Listing = {};

export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: null
    }
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems() {
    itemList = [];
    items.get().then((snapshot) => {
      snapshot.forEach((item) => {
        Listing = { id: item.id, company: item.data().company, website: item.data().website, email: item.data().email };
        itemList.push(Listing);
      })
      this.setState({
        list: itemList,
        error: null
      });
    });
  }

  editItem = (e) => {
    console.log("ID Parent: " + e.target.id);
    this.props.history.push(`/item/${e.target.id}`);
    return (<ListItem />);
  }

  deleteItem = (e) => {
    console.log("ID Parent: " + e.target.id);
    Listing = this.state.list;
    const idx = Listing.findIndex(i => i.id === e.target.id);
    Listing.splice(idx, 1);
    this.setState({ list: Listing });
    items.doc(e.target.id).delete();
  }

  render() {
    return (
      <div>
        <AppHeader />
        <div id="list">
          {this.state.list.length > 0 &&
            this.state.list.map((item) => (
              <div key={item.id} className="card bg-light m-1">
                <div className="card-body p-2">
                  <div className="d-flex p-2">
                    <div className="justify-content-start">
                      <h5 className="card-title">Company: {item.company}</h5>
                      <p className="card-text">Website: {item.website}</p>
                      <p className="card-text">e-Mail: {item.email}</p>
                    </div>
                    <div className="d-flex align-items-start flex-column ml-auto">
                      <div className="mb-auto">
                        <Button onClick={this.editItem} id={item.id} className="btn btn-outline-success">Edit</Button>
                      </div>
                      <div >
                        <Button onClick={this.deleteItem} id={item.id} className="btn btn-outline-danger">Delete</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {this.state.list.length === 0 &&
            <h3 className="error">Item List is Empty<br />Click + (New Item)</h3>}
          {this.state.error &&
            <h3 className="error">{this.state.error}</h3>}
        </div>
      </div>
    );
  }
}
