import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import { BudgetProvider } from "./BudgetContext";
function App() {
  return (
    <BudgetProvider>
      <Header></Header>
      <Hero></Hero>
    </BudgetProvider>
  );
}

export default App;
