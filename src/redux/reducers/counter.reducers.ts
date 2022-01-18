interface ActionCounterReducer {
    type: string
}

const counterReducer = (state = 0, action: ActionCounterReducer) => {
    switch (action.type) {

        case "INCREMENT": {
            return state += 1
        }

        case "DECREMENT": {
            return state -= 1
        }

        default: {
            return state
        }

    }
}

export default counterReducer;