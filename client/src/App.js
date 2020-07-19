import React, {Component} from "react";
import GreeterContract from "./contracts/Greeter.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = {greeting: "", newGreeting: "", web3: null, accounts: null, contract: null};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GreeterContract.networks[networkId];
      const instance = new web3.eth.Contract(
        GreeterContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({web3, accounts, contract: instance}, this.getGreeting);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getGreeting = async () => {
    const {contract} = this.state;

    const response = await contract.methods.greeting().call();

    this.setState({greeting: response});
  };

  updateGreeting = async () => {
    const {accounts, contract, newGreeting} = this.state;

    contract.methods.updateGreeting(newGreeting).send({ from: accounts[0]})
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Greeter</h1>
        <div>{this.state.greeting}</div>
        <input
          value={this.state.newGreeting}
          onChange={e => this.setState({newGreeting: e.target.value})}
        />
        <button onClick={this.updateGreeting}>Update Greeting</button>
      </div>
    );
  }
}

export default App;
