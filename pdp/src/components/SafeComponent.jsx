import React, { Component } from "react";

export default class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch() {

  }

  render() {
    if(this.state.hasError) {
      return <h3>Something went wrong!</h3>
    }

    return this.props.children;
    
  }

}
