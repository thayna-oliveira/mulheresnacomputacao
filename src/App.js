import React, { Component } from 'react';
import './bulma-framework.sass';
import './custom.sass';
import { Card } from './components/Card/';
import { Navbar } from './components/Navbar/';
import { minas } from './data/minas';


class App extends Component {
  render() {

    const minasCard = minas.map((mina, index) => Card(mina, index));

    return (

      <div className="App">

        <Navbar></Navbar>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container is-fluid">
              <h1 className="title">
                Mulheres na computação
      </h1>
              <h2 className="subtitle">
                Primary subtitle
      </h2>
            </div>
          </div>
        </section>


        <div className="container is-fluid">
          {minasCard}
        </div>
      </div>
    )
  };
}

export default App;
