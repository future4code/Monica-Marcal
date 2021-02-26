import React from 'react';
import {Switch, Route} from "react-router-dom"
import LoginPage from '../pages/LoginPage/LoginPage'
import PostListPage from '../pages/PostListPage/PostListPage'
import PostPage from '../pages/PostPage/PostPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'



const Router = ({setRightButtonText}) => {
    return(
            <Switch>
                <Route exact path="/">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/postList">
                    <PostListPage/>
                </Route>
                <Route exact path="/postPage/:id">
                    <PostPage/>
                </Route>
                <Route exact path="/register">
                    <RegisterPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
    )
}

export default Router;