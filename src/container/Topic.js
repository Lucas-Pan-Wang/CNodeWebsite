import React, { Component } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom'

export default class Topic extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            props:props
        }
    }
    componentDidMount() {
        let types=this.state.props.location.pathname.split('/')[2];
        let page = this.props.match.params.page;
        console.log(this.props.match.params.types);
        fetch('https://cnodejs.org/api/v1/topics?tab='+types+'&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        });
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            let types=this.state.props.location.pathname.split('/')[2];
            fetch('https://cnodejs.org/api/v1/topics?tab='+types+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            });
        };
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item,idx)=>(
                        <div style={{width:800,overflow:'left'}} key={idx}>
                            <div className="zhuti-div">
                                <img src = {item.author.avatar_url} alt=""  className="zhuti-image1"/>
                                <p className="zhuti-p zhuti-p0">{item.reply_count}/</p>
                                <p className="zhuti-p zhuti-p1">{item.visit_count}</p>
                                <Router><Link className="zhuti-p zhuti-p2" dangerouslySetInnerHTML={{__html:item.title}} to={`/${this.state.props.location.pathname.split('/')[2]}/details/${this.props.match.params.page}/${idx}`}></Link></Router>
                                <p className="zhuti-p zhuti-p3">20分钟前</p>
                                <img className="zhuti-image2" src = {item.author.avatar_url} alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

