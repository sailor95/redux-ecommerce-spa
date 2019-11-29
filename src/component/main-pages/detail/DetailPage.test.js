import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, withRouter } from 'react-router-dom';

import Root from '../../app/Root';
import DetailPage from './DetailPage';
import DetailPageNavbar from '../../navbars/detail-page/DetailPageNavbar';
import DetailPageLikeButton from './like-button/DetailPageLikeButton';
import DetailPageFooter from './footer/DetailPageFooter';

let wrapped;

const initState = {
  items: {
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
    }
  }
};

beforeEach(() => {
  const RDetailPage = withRouter(DetailPage);

  wrapped = mount(
    <Root initState={initState}>
      <MemoryRouter initialEntries={['/detail/1']}>
        <RDetailPage />
      </MemoryRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('should render', () => {
  const { image, name, description } = initState.items.currentItem;

  it('DetailPageNavbar', () => {
    expect(wrapped.find(DetailPageNavbar)).toHaveLength(1);
  });

  it('DetailPageLikeButton', () => {
    expect(wrapped.find(DetailPageLikeButton)).toHaveLength(1);
  });

  it('DetailPageFooter', () => {
    expect(wrapped.find(DetailPageFooter)).toHaveLength(1);
  });

  it('Image', () => {
    expect(wrapped.find('img').prop('src')).toEqual(image);
  });

  it('Title', () => {
    expect(wrapped.render().text()).toContain(name);
  });

  it('Description', () => {
    expect(wrapped.render().text()).toContain(description);
  });
});