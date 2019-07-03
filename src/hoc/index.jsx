/*

@author   S.Suriya
@company  GSM Plus Infotech

*/

// this component is HighOrderComponent act as a overlayer of an app.

import React, { Component } from 'react'
import Main from '../components/main'
class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <h2>Javascript IDE</h2>
                <Main></Main>
            </div>
        )
    }
}

export default Layout;
