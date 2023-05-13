
import './App.css';
import Header from './components/Header';
import data from './data';
import Card from './components/Card';

function App() {

  const cards = data.map(cardData => {
    return (
      <Card data={cardData} />
    )
  })


  return (
    <div className="App">
      <Header />

      <section>
        {cards}
      </section>

    </div>
  );
}

export default App;