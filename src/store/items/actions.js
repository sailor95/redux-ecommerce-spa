import itemsApi from '../../services/apis/itemsApi';

export const ACTION_TYPES = {
  GET_ALL_ITEMS_SUCCESS: 'Successfully get all items',
  GET_ALL_ITEMS_FAILED: 'Failed to get all items',
  GET_ITEM_BY_ID_SUCCESS: 'Successfully get item by id',
  GET_ITEM_BY_ID_FAILED: 'Failed to get item by id',
  GET_ALL_CATEGORIES_SUCCESS: 'Successfully get all categories',
  GET_ALL_CATEGORIES_FAILED: 'Failed to get all categories'
};

const actions = {
  getAllItems: () => async dispatch => {
    const response = await itemsApi.getAllItems();

    if (!!response) {
      dispatch({
        type: ACTION_TYPES.GET_ALL_ITEMS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: ACTION_TYPES.GET_ALL_ITEMS_FAILED,
        payload: []
      });
    }
  },
  getItemById: id => async dispatch => {
    const response = await itemsApi.getItemById(id);

    if (!!response) {
      dispatch({
        type: ACTION_TYPES.GET_ITEM_BY_ID_SUCCESS,
        payload: response
      });
    } else {
      dispatch({
        type: ACTION_TYPES.GET_ITEM_BY_ID_FAILED,
        payload: {}
      });
    }
  },
  getAllCategories: () => async dispatch => {
    const response = await itemsApi.getAllCategories();

    if (!!response) {
      dispatch({
        type: ACTION_TYPES.GET_ALL_CATEGORIES_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: ACTION_TYPES.GET_ALL_CATEGORIES_FAILED,
        payload: []
      });
    }
  }
};

export default actions;