export const increase_count = (value = 1) => {
    return { type: 'INCREASE_COUNT', payload: value }
}
export const decrease_count = (value = 1) => {
    return { type: 'DECREASE_COUNT', payload: value }
}