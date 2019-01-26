import React, {Component} from 'react';
import {Link} from 'react-router-dom';

  import logo from '../logo.svg';



class HeaderComponent extends Component {



  render() {
    return (
      <div>
                <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="100" src={logo}/>
              </td>
              <td width="8"/>
              <td>
                  <h1>
              <a href="/"> Robinhood Movies</a>
              </h1>
              </td>
            </tr>
 
          </tbody>
        </table> 

     </div>
    );
  }
}

export default HeaderComponent;
