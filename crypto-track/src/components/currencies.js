import React, { Component } from "react";
import currencies from "./../currenciesData";
import CurrenciesTable from "./currenciesTable";
import Table from "react-bootstrap/Table";

class Currencies extends Component {
  state = {
    currencies: currencies,
    ownCurrency: []
  };

  addCryptoAmountValue = (cryptoAmount, id) => {
    let currencies = this.state.currencies.find(currency => currency.id === id);
    let newCurrency = { ...currencies, cryptoAmount };
    let ownCurrencies = [...this.state.ownCurrency, newCurrency];
    this.setState({
      ownCurrency: ownCurrencies
    });
    console.log(currencies);
    console.log(ownCurrencies);
    console.log(this.state.ownCurrency);
  };

  render() {
    return (
      <div style={{ marginTop: "100px" }} className="container">
        <h2 className="fontTwo">
          Top 50 Cryptocurrencies by Market Capitalization
        </h2>
        <Table striped bordered hover responsive="xs">
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Short name</th>
              <th className="table-head">$ Value</th>
              <th className="table-head">last 24h</th>
              <th className="table-head">Amount your own</th>
              <th className="table-head">$ value of your own</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currencies.map(currency => (
              <CurrenciesTable
                key={currency.id}
                currency={currency}
                findCurrency={this.findCurrency}
                addCryptoAmountValue={this.addCryptoAmountValue}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Currencies;
