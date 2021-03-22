import Card from './components/Card';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Card
        title="Card title"
        text ="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnText="Go somewhere">
        <img src="http://placehold.it/300x200" className="card-img-top" alt="img" />
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
        btnText="Go somewhere"
      />
    </div>
  );
}