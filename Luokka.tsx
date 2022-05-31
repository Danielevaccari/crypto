import React, { Component } from 'react';

interface State {
  tilaMuuttuja: boolean
}

class ClassComponent extends Component<State> {
  constructor(props: any) {
    super(props);
    this.state = {
      tilaMuuttuja: true
    };
  }


  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.muuttuja !== prevProps.muuttuja) {
      console.log('componentDidUpdate');
    }
  }




  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div>
        Luokkakomponentti
      </div>
    );
  }
}

export default ClassComponent;
