import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, withRouter } from 'react-router-dom';

import App from './App';
import Root from './Root';
import defer from '../../services/helpers/deferForTest';
import HomePage from '../main-pages/home/HomePage';
import DetailPage from '../main-pages/detail/DetailPage';
import NotFoundPage from '../main-pages/not-found/NotFoundPage';

let wrapped;

const initState = {
  items: {
    items: [{
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
    }],
    currentItem: {
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
    categories: [
      {
        id: '1',
        name: 'ca_1'
      }
    ]
  }
};

afterEach(() => {
  wrapped.unmount();
});

it('should render HomePage as default page', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(HomePage)).toHaveLength(1);
});

it('should render HomePage when url path is not defined', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find(HomePage)).toHaveLength(1);
});

describe('should be able to route to', () => {
  const RApp = withRouter(App);

  // Mock async action creator
  const deferredApi = defer();
  const asyncApiCall = () => deferredApi.resolve();

  it('DetailPage when item id exists', () => {
    wrapped = mount(
      <Root initState={initState}>
        <MemoryRouter initialEntries={['/detail/1']}>
          <RApp getItemById={asyncApiCall} />
        </MemoryRouter>
      </Root>
    );

    deferredApi.then(() => {
      wrapped.update();

      expect(wrapped.find(DetailPage)).toHaveLength(1);
    });
  });

  it('NotFoundPage when item id does not exist', () => {
    wrapped = mount(
      <Root initState={initState}>
        <MemoryRouter initialEntries={['/detail/2']}>
          <RApp getItemById={asyncApiCall} />
        </MemoryRouter>
      </Root>
    );

    deferredApi.then(() => {
      wrapped.update();

      expect(wrapped.find(NotFoundPage)).toHaveLength(1);
    });
  });
});