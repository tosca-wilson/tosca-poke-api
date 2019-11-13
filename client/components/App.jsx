import React from 'react'
import { getPokeDetails } from '../api/poke'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokeDetails: {}
    }
  }

  componentDidMount() {
    getPokeDetails()
    .then(pokeDetails => {
      this.setState({
        pokeDetails: pokeDetails
      })
    })
  }

  render(){
    const pokeDetails = this.state.pokeDetails
    console.log(this.state)
      return (
        <>
          <h1>Poke</h1>

          {/* {pokeDetails && (
            <section>
              <ul>
                {
                  Object.keys(pokeDetails).map(k => {
                  return(<li>{k}: {pokeDetails[k]}</li>
                  )})
              }
              </ul>
            </section>
        )} */}
        </>
      )
  }
}

export default App