import './App.css';
import StarRating from './Components/StarRating'

function App() {
  return (
    <div>
      <h1>Star Rating Component</h1>
      {/* Setting total stars and initial rating */}
      <StarRating totalStars={5} initialRating={1} />
    </div>
  );
}

export default App;

