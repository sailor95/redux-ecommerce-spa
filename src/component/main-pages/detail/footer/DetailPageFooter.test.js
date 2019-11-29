import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, withRouter } from 'react-router-dom';

import DetailPageFooter from './DetailPageFooter';

let wrapped;

const productData = {
  price: 51,
  shipping_fee: '送料込み'
};

beforeEach(() => {
  wrapped = mount(<DetailPageFooter {...productData} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('should contain', () => {
  const { price, shipping_fee } = productData;

  it('Price', () => {
    expect(wrapped.render().text()).toContain(`¥${price}`);
  });

  it('Shipping Fee', () => {
    expect(wrapped.render().text()).toContain(shipping_fee);
  });
});