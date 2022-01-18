import React, { Suspense } from "react";
import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          {/* TODO: Remove after testing */}
          <ul>
            <li>
              <Link to="/photos">Go to photo app</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/edit">Go to Edit phot page</Link>
            </li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
