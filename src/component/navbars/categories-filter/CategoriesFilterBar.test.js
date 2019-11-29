import React from 'react';
import { mount } from 'enzyme';
import { LinkContainer } from 'react-router-bootstrap';
import { MemoryRouter } from 'react-router-dom';

import CategoriesFilterBar from './CategoriesFilterBar';
import actions from '../../../store/items/actions';

let wrapped;

const categories = [
  {
    id: '1',
    name: 'ca_1'
  }
];

it('renders categories links', () => {
  wrapped = mount(
    <MemoryRouter initialEntries={['/']}>
      <CategoriesFilterBar
        categories={categories}
        getFilteredItems={actions.getFilteredItems}
      />
    </MemoryRouter>
  );

  // 2 Nav links: 'All', 'ca_1'
  expect(wrapped.find(LinkContainer)).toHaveLength(2);
});