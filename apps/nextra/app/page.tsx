import { Banner } from '@myorg/common-ui';
import styles from './page.module.css';
import { exampleProducts } from '@myorg/products';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Banner text="Next VOD app" />
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
