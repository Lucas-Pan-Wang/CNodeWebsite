import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

export default class Sider extends Component{
    render(){
        return (
            <div className="sider-div">
                <ul style ={{float:'left'}} className="sider-ul">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key = {item}  style ={{float:'left'}} className='sider-li'><Link to ={'/home/'+this.props.types+'/'+item}>{item}</Link></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
