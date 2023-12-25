import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import BookshelfMinimal from "./components/Home/bookshelf-minimal";
import BookshelfModern from "./components/BookshelfModern/bookshelf-modern";
import AllBooks from "./components/AllBooks/allBooks";
import CartContext from "./context/cartContext";

const App = () => {
  const [cartList, setCartList] = useState([]);
  const addCartItem = () => {};
  const removeAllCartItems = () => setCartList([]);
  return (
    <CartContext.Provider value={{ cartList, addCartItem: addCartItem }}>
      <Switch>
        <Route exact path="/bookshelf-minimal" component={BookshelfMinimal} />
        <Route exact path="/bookshelf-modern" component={BookshelfModern} />
        <Route exact path="/" component={BookshelfMinimal} />
        <Route exact path="/all-books" component={AllBooks} />
      </Switch>
    </CartContext.Provider>
  );
};

export default App;
