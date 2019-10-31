function ChangeHandler<T>(action: string) {
    return (payload: T) => {
        return {
            type: action,
            payload
        }
    }
}
export function ChangeStateHandler(state: any, action: any) {
    return {
        ...state,
        ...action.payload
    }
}

export default ChangeHandler;