import { Banner } from '@myorg/common-ui';
import { exampleProducts } from '@myorg/products';

export function App() {
  return (
    <div>
      <Banner text="Welcome to our store app." />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
