import React, {Component} from 'react';
import {Input } from 'reactstrap';

const things = ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
 
export default class SearchIndex extends React.Component {
  constructor() {
    super()
   this.state = {
     things: things,
     searchResults: things
   }
 }

 searchFunction(e) {
   e.preventDefault()
   const searchResults = this.state.things.filter(thing =>thing.includes(e.target.value))

this.setState({
  searchResults
})
 }

 render() {
   return (
     <div>
       <Input placeholder='Search Here' onChange={e =>this.searchFunction(e)} />
       <h3>Results</h3>
       <ul>
       {this.state.searchResults.map(thing => <li>{thing}</li>)}
       </ul>
     </div>
   )
 }
}