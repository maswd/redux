const initialState = {
    number: 0
}
const numReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_NUM':
            return {
                ...state,
                number: state.number + 1
            }
        case 'DECREASE_NUM':
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }

}
export default numReducer