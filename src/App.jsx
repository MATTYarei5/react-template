import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductDetail from './components/pages/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/pages/Products';
import NotFound from './components/pages/NotFound';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';

import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
