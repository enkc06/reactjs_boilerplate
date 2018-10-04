// import "styles/css/App.css";

import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import NotFound from "./components/notFound";
import { store, persistor } from "./redux/store";

if (process.env.NODE_ENV === "production") {
  require("config/errorLog");
  console.log = () => {};
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ToastContainer /> */}
          <div className="App">
            <div className="Main">
              <Switch>
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" exact to="/login" />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
