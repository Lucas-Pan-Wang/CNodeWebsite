import React, { Component} from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Sider from './Sider'
import Topic from './Topic'

export default class Ask extends Component {
    render() {
        return (
            <Router>     
                <div>
                    <Switch>
                        <Route path='/home/ask/:page' component={Topic}/>
                        <Redirect from='/*' to = '/home/ask/1'/>
                    </Switch>
                    <Sider types='ask'/>
                </div>
            </Router>
        )
    }
}

