import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <h1 className="text-4xl text-center mt-8">Welcome to My Website</h1>
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default App;
