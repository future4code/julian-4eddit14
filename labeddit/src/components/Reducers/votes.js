export const initialState = {
    votePositive: '',
    voteNegative: '',
    iconColorPositive: '',
    iconColorNegative: ''
}

export const voteReducer = (state, action) => {
    switch (action.type) {
        case 0:
            return {
                votePositive: 1,
                voteNegative: -1
            }
        case 1:
            return {
                votePositive: 0,
                voteNegative: -1,
                iconColorPositive: 'secondary'
            }
        case -1:
            return {
                votePositive: 1,
                voteNegative: 0,
                iconColorNegative: 'secondary'
            }
        default:
            return state
    }
}