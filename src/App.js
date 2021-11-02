import { useEffect, useRef, useState } from 'react'
import {   BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
      </Switch>
    </>
  )
}

export default App