import './App.css';
import FeedPage from './components/feedPage/feedPage';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    // <div className="App">
    //   <FeedPage/>
    // </div>
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
    <FeedPage/>
  </BrowserRouter>
  );
}

export default App;
