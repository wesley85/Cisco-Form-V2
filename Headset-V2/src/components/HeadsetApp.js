import React from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import Footer from './Footer';


export default class HeadsetApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      clicks: prevState.options.concat(option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const clicks = JSON.parse(json);

      if (clicks) {
        this.setState(() => ({ clicks }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks.length !== this.state.clicks.length) {
      const json = JSON.stringify(this.state.clicks);
      localStorage.setItem('clicks', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {

    return (
      <div>
        <Header />
        <div>
          <OrderForm />
        </div>
        <Footer />
      </div>
    );
  }
}
