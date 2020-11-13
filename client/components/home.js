import React from 'react'
import { Route } from 'react-router-dom'
import Profile from './Profile'
import Main from './Main'
import Header from './Header'
import Users from './users'

const Home = () => {
  return (
    <div>
      <Header />
      <Users />
      <Route exact path="/dashboard/main" component={() => <Main />} />
      <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
    </div>
  )
}

export default Home
