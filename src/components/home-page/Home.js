import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { firebaseConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

import HeaderLeft from '../../components/home-page/component-in-home/HeaderLeft.js';
import HeaderContent from '../../components/home-page/component-in-home/HeaderContent.js';
import SiderbarLeft from '../../components/home-page/component-in-home/SiderbarLeft.js';
import MenuBar from '../../components/home-page/component-in-home/MenuBar.js';
import MainContent from '../../components/home-page/component-in-home/MainContent.js';
import MessageInput from '../../components/home-page/component-in-home/MessageInput.js';
import '../../styles/homepage/home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            height: window.innerHeight,
        }
        this.onResize = this.onResize.bind(this);
    }

    onResize(){
        this.setState({
            height: window.innerHeight,
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.onresize);
        // this.addTestMessages();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    render(){
        const { height } = this.state;
        const style = {
            height:height,
        }



        // console.log("1234");
        // this.props.firebase.auth().signOut().then(function() {
        //     // Sign-out successful.
        //     console.log("logout success")
        // }, function(error) {
        //     // An error happened.
        // });
        // this.props.history.push('/');
        return(
           <div style={style} className="app-message">
                {/*-------------------------------------------MENU---------------------------------*/}
                <MenuBar></MenuBar>
                <div className="app-wrapper">
                    <div className="header-message">
                        <HeaderLeft></HeaderLeft>
                        <HeaderContent></HeaderContent>
                    </div>
                    {/* ---------------------------------------MAIN----------------------------------- */}
                    <div className="main-message">
                        <SiderbarLeft></SiderbarLeft>
                        <div className="main-content">
                            <MainContent></MainContent>                          
                            <MessageInput></MessageInput>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({firebase: { auth } }) => ({ auth }))
)(withRouter(Home))