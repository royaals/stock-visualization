import "./App.css";
import MyComponent from "./components/MyComponent";
import ChartA from "./components/ChartA";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import ChartB from "./components/ChartB";
function App() {
  return (
   
      <div className="App">
       <Router>
        <Header />
        <Routes>
        <Route path="/" element={
          <div className="app__body ">
          <MyComponent />
          <ChartA />
        </div>
        } />
        <Route path='chart-2' element={<ChartB/>}/>
        
        </Routes>
        
        </Router>
      </div>
   
  );
}

export default App;
