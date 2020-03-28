import React, { Component } from 'react';

const withFooter = (WrappedComponent) => {
      class WithFooter extends Component {
            
            render() {
                  let divStyle ={
                        position: 'fixed',
                        left: 0,
                        border: '1px solid ',
                        bottom: 0,
                        width: '100%',
                        height:'50px',
                        backgroundColor:'black',
                        color: 'pink',
                       'text-align': 'center',
                       'box-shadow': '5px 10px green'
                  }
                
                  return <WrappedComponent footerStyle={divStyle} name={"Bunny"} />
            }
      }

      return WithFooter;
}

export default withFooter;