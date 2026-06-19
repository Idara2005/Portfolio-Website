import { Router as WouterRouter, Route, Switch } from "wouter";
import Portfolio from "./pages/Portfolio";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem", color: "#1F2937" }}>
      <h1>404 - Page Not Found</h1>
      <a href="/" style={{ color: "#F97316" }}>Go Home</a>
    </div>
  );
}

function App() {
  return (
    <WouterRouter base="/">
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
