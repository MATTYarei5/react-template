import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductDetail from './pages/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';

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
