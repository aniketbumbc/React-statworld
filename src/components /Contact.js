import React from 'react';
import withFooter from './WithFooter';

function Contact(props) {
      return (
            <div>
                  <h1>Welcome Contact page </h1>

                  <h3 style={props.footerStyle}> Copy right @{props.name}</h3>
            </div>
      )
}

export default withFooter(Contact);