import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api/index';

import coronaImage from './images/image.png';

// importing all files from components folder,
// this task is redundant So , follow the next methdod

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';

// To make this import short , use this code
// For this we need to create an index.js file in components folder

import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // setting the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='Covid-19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
