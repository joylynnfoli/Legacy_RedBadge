import React from 'react'

export default class DogIndex extends React.Component{
constructor (){
    super()
    this.state={
        dogImageUrl: null
    }
}

componentDidMount () {
    this.fetchImage()
}

async fetchImage (e) {
    if (e){
    e.preventDefault()
}
 const response = await fetch ('https://dog.ceo/dog-api/breeds/image/random')
 const jsonified = await response.json()
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .catch((error) => {
      if (error instanceof Error) {
        return { error }
      }

      return error.json().then((responseJson) => {
        return {
          error: new Error(
            `HTTP ${error.status} ${error.statusText}: ${responseJson.msg}`
          )
        }
      })
    })
  this.setState({
     dogImageUrl: jsonified.message
 })
}

render (){
    return (
        <div>
        <img src={this.state.dogImageUrl} alt="this is a dog (image)"/>
        <button onClick= {e=>this.fetchImage(e)}>Fetch a New Pup</button>
        </div>
        )
    }
}