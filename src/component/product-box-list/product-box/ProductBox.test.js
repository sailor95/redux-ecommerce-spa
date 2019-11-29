import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, withRouter } from 'react-router-dom';

import ProductBox from './ProductBox';

let wrapped;

const productData = {
  itemId: "1",
  itemName: "men1",
  itemLikes: 91,
  itemPrice: 51,
  itemIsSoldOut: true,
  itemImg: "http://dummyimage.com/400x400/000/fff?text=men1",
};

beforeEach(() => {
  const RProductBox = withRouter(ProductBox);

  wrapped = mount(
    <MemoryRouter>
      <RProductBox {...productData} />
    </MemoryRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('should contain', () => {
  const { itemImg, itemName, itemPrice } = productData;

  it('Image', () => {
    expect(wrapped.find('img').prop('src')).toEqual(itemImg);
  });

  it('Name', () => {
    expect(wrapped.render().text()).toContain(itemName);
  });

  it('Price', () => {
    expect(wrapped.render().text()).toContain(`¥${itemPrice}`);
  });

  it('Sold sign', () => {
    expect(wrapped.render().text()).toContain('SOLD');
  });
});

