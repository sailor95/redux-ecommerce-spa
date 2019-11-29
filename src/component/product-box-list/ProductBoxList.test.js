import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ProductBoxList from './ProductBoxList';
import ProductBox from './product-box/ProductBox';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

const items = [
  {
    id: "1",
    name: "men1",
    description: "size free 1",
    like_count: 91,
    comment_count: 59,
    price: 51,
    is_sold_out: false,
    shipping_fee: "送料込み",
    image: "http://dummyimage.com/400x400/000/fff?text=men1",
    category_id: 1
  },
  {
    id: "2",
    name: "men2",
    description: "size free 1",
    like_count: 0,
    comment_count: 0,
    price: 10000,
    is_sold_out: true,
    shipping_fee: "送料込み",
    image: "http://dummyimage.com/400x400/000/fff?text=men2",
    category_id: 2
  }
];

it('should render ProductBoxes with items prop', () => {
  wrapped = mount(
    <MemoryRouter>
      <ProductBoxList items={items} />
    </MemoryRouter>
  );

  expect(wrapped.find(ProductBox)).toHaveLength(2);
});
