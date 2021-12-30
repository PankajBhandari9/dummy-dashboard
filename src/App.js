import React from 'react'
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App;