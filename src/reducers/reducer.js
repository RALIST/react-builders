const initialState = {
  modalShow: false,
  error: false,
  loading: false
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MODAL_CLOSED':
      return {
        ...state,
        modalShow: false
      }
    case 'MODAL_OPENED':
      return {
        ...state,
        modalShow: true
      }
    default:
      return state
  }
}

export default reducer;
