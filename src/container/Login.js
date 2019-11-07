import React from 'react'

export default function Login(props){
    function login(){
        props.history.push('/');
    }
    return (
        <div className="login-div">
            <p className="login-p1">用户名：<input type="text"/></p>
            <p className="login-p2">密码：<input type="password"/></p>
            <button onClick={login}>登陆</button>
        </div>
    )
}
