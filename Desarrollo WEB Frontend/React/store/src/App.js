import './App.css';
import ProductCard from './components/productCard/ProductCard';

function App() {
  return (
    <div className="App">
      
      <ProductCard name="Camisa Azúl" />
      <ProductCard name="Pantalón Verde" />
      <ProductCard name={3} />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default App;
