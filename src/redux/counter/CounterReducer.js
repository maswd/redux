const initialState = {
    counter: 0
}
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'DECREASE_COUNT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state
    }

}
export default countReducer