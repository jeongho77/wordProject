import logo from './logo.svg';
import Header from './Component/Header';
import Plan from './Page/Plan/Plan';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        width : "1920px",
        paddingTop: "100px",
        minHeight: "100vh",
        alignItems: "center",
      }}>
        <Header></Header>
        <Plan></Plan>


    </div>
  );
}

export default App;
