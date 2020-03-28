import React from 'react';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link,
      useParams,
      useRouteMatch
} from "react-router-dom";
import withFooter from './WithFooter';
function Project(props) {
      let { path, url } = useRouteMatch();
      return (
            <div>
                  <h1>Welcome Project page </h1>
                  <ul>
                        <li>
                              <Link to={`${url}/IELTS`}>IELTS</Link>
                        </li>
                        <li>
                              <Link to={`${url}/Google`}>Google</Link>
                        </li>
                  </ul>

                  <switch>
                        <Route exact path={path}>
                              <h1> Select Projects</h1>
                        </Route>
                  <Route path={`${path}/:topicId`}>
                         <Topic />
                  </Route>
                            
             </switch>
             <h3 style={props.footerStyle}> Copy right @{props.name}</h3>
            </div>
                  )
            }

            function Topic() {
                  let { topicId } = useParams();
         
                  return (
                    <div>
                      <h1>{topicId}</h1>
                    </div>
                  );
                }
            
export default withFooter(Project);