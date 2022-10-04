import { Route, Router } from "wouter";
import { Products, Header, Category } from "../Pages/index";

const Routes = () => {
  return (
    <>
      <Route path="/">
        <Header />
      </Route>
      <Router base="/products">
        <Route path="/:id">{(params) => <Products params={params} />}</Route>
      </Router>
      <Route path="/category/:id">
        {(params) => <Category params={params} />}
      </Route>
    </>
  );
};

export default Routes;
