import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import Login from './container/Login'
import My from './container/My'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/api' component={Api}/>
                                <Route path='/start' component={Start}/>
                                <Route path='/about' component={About}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/all/details/:page/:idx' component={My}/>
                                <Route path='/ask/details/:page/:idx' component={My}/>
                                <Route path='/good/details/:page/:idx' component={My}/>
                                <Route path='/job/details/:page/:idx' component={My}/>
                                <Route path='/share/details/:page/:idx' component={My}/>
                                <Redirect from='/*' to = '/home'/>
                            </Switch>
                        </div>
                        <div className="sider">
                            <p>CNode：Node.js专业中文社区</p>
                            <p>这里是有点简陋的侧边栏( ´Д`)y</p>
                        </div>
                    </div>          
                </div>
            </Router>
        )
    }
}
