

export const vote = (userVote) => {
    let votePositive, voteNegative, iconColorPositive, iconColorNegative

    if (userVote === 0) {
        votePositive = 1
        voteNegative = -1
    } else if (userVote === 1) {
        votePositive = 0
        voteNegative = -1
        iconColorPositive = 'secondary'
    } else if (userVote === -1) {
        votePositive = 1
        voteNegative = 0
        iconColorNegative = 'secondary'
    } else {
        votePositive = 1
        voteNegative = 1
        iconColorPositive = 1
        iconColorNegative = 1
    }
    return { votePositive, voteNegative, iconColorPositive, iconColorNegative }
}





























// export const initialState = {
//     votePositive: '',
//     voteNegative: '',
//     iconColorPositive: '',
//     iconColorNegative: ''
// }

// export const voteReducer = (state, action) => {
//     switch (action.type) {
//         case 0:
//             return {
//                 votePositive: 1,
//                 voteNegative: -1
//             }
//         case 1:
//             return {
//                 votePositive: 0,
//                 voteNegative: -1,
//                 iconColorPositive: 'secondary'
//             }
//         case -1:
//             return {
//                 votePositive: 1,
//                 voteNegative: 0,
//                 iconColorNegative: 'secondary'
//             }
//         default:
//             return state
//     }
// }