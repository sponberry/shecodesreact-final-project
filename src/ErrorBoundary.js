import React, { Component } from "react";


export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h2>Something went wrong</h2>
            <p>Please <a href="/" onclick="window.location.reload(true);" rel="norefferrer">refresh the page</a></p>
          </div>
        );
      }
  
      return this.props.children;
    }
  }