import axios from "axios";

export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool,
  };
}
export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool,
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items,
  };
}

export const itemsFetchData = (url) => {
  const dispatch = async (dispatch) => {
    try {
      const resp = await axios.get(url);
      dispatch(itemsFetchDataSuccess(resp.data));
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      dispatch(itemsHasErrored(err));

      console.error(err);
    }
  };
  return dispatch;
};
