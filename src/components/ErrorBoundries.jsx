import React, { Component } from 'react'

export default class ErrorBoundries extends Component {


    constructor(props){
        super(props)
            this.state = {hasError : false}
        
    }

    static getDerivedStateFromError(error){
        return {hasError : true}
    }

    componentDidCatch(error , info){
        console.error("Error Caught :",error,info)
    }

  render() {
    if(this.state.hasError){
        return <h1>Something Went Wrong..!!!</h1>
    }

    return this.props.children;
    
  }
}
