const text = (state = 'Click to Change Text', action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      console.log('inside text reducer value of action.text: ', action.text);
      return state = action.text
    default:
      return state
  }
}

export default text
