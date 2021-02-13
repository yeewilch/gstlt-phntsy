import Navigation from "./components/Navigation";
import ContentRouter from "./components/ContentRouter";

function App() {
  return (
    <div className='App'>
      <div className='content'>
      <h1>PHANTASY<span style={{ fontWeight: 500 }}>NET</span></h1>
      </div>
      <div className='content'>
        <Navigation />
        <ContentRouter />
      </div>
    </div>
  );
}

export default App;
