import { exampleProducts } from './products';

describe('products', () => {
  it('should work', () => {
    expect(exampleProducts).toContainEqual({
      id: '1',
      name: 'Product 1',
      price: 100,
    });
  });
});
