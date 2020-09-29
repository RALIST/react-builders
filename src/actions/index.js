const modalOpened = () => {
  return {
    type: 'MODAL_OPENED'
  }
}

const modalClosed = () => {
  return {
    type: 'MODAL_CLOSED'
  }
}

export {
  modalClosed,
  modalOpened
}
