import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import FeedPage from './FeedPage'
import PostPage from './PostPage'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/post'>
                    <PostPage />
                </Route>
                <Route exact path='/feed'>
                    <FeedPage />
                </Route>
                <Route exact path='/signup'>
                    <SignupPage />
                </Route>
                <Route exact path='/'>
                    <LoginPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;