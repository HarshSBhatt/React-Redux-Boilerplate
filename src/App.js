//! Built-in or Third Party Packages

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//! User Files

import "./styles/App.scss";
import { ConfigureStore } from "store/configureStore";
import Main from "app/Main";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
