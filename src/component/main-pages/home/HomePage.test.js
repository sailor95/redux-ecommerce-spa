import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, withRouter } from 'react-router-dom';

import Root from '../../app/Root';
import HomePage from './HomePage';
import HomeNavbar from '../../navbars/home-page/HomeNavbar';
import CategoriesFilterBar from '../../navbars/categories-filter/CategoriesFilterBar';
import ProductBoxList from '../../product-box-list/ProductBoxList';

let wrapped;

beforeEach(() => {
  const RHome = withRouter(HomePage);

  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/']}>
        <RHome />
      </MemoryRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('should contain', () => {
  it('HomeNavbar', () => {
    expect(wrapped.find(HomeNavbar)).toHaveLength(1);
  });

  it('CategoriesFilterBar', () => {
    expect(wrapped.find(CategoriesFilterBar)).toHaveLength(1);
  });

  it('ProductBoxList', () => {
    expect(wrapped.find(ProductBoxList)).toHaveLength(1);
  });
});