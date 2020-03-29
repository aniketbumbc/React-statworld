import React from 'react';
import withFooter from './WithFooter';

function Contact(props) {
      // console.log("Data Contact",props.data);
      return (
            <div>
                  <h1>Welcome Contact page </h1>

                  <h3 style={props.footerStyle}> Copy right @{props.name}</h3>
                  <h1>{props.data.name}</h1>
                  <h1>{props.data.age}</h1>
                  <h1>{props.data.gender}</h1>
            </div>

            
      )
}

export default withFooter(Contact);