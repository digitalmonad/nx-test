import { exampleProducts } from './products';

describe('products', () => {
  it('should work', () => {
    expect(exampleProducts).toContain({
      id: '1',
      name: 'Product 1',
      price: 100,
    });
  });
});
