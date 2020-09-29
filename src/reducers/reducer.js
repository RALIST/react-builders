const initialState = {
  modalShow: false
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MODAL_CLOSED':
      return {
        modalShow: false
      }
    case 'MODAL_OPENED':
      return {
        modalShow: true
      }
    default:
      return state
  }
}

export default reducer;
