import React from 'react';
import withFooter from './WithFooter';

function Home(props) {
//      let  background = 'https://www.w3schools.com/jsref/img_tree.png';
     
      return (
            <div>
                  <h4> This is from Home component </h4>
                  <h3 style={props.footerStyle}> Copy right @{props.name}</h3>
            </div>
      )
}


export default withFooter(Home);