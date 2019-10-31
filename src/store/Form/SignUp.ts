import ChangeHandler, { ChangeStateHandler } from '../../lib/store/ChangeHandler';
import GetServerPayload from '../../lib/store/GetServerPayload';

const FORM_CHANGE = 'SignUp/FORM_CHANGE' as const;
const FORM_SUBMIT = 'SignUp/FORM_SUBMIT' as const;
const FORM_SUBMIT_SUCCESS = 'SignUp/FORM_SUBMIT_SUCCESS' as const;

export const SignUpChange = ChangeHandler<{
    id?: string,
    password?: string,
    passwordAccept?: string,
    no?: string,
    name?: string;
}>(FORM_CHANGE);
export function SignUpFormSubmit() {
    return {
        type: FORM_SUBMIT
    }
}
function SignUpFormSubmitSuccess() {
    return {
        type: FORM_SUBMIT_SUCCESS
    }
}

type ActionType = ReturnType<typeof SignUpChange> | ReturnType<typeof SignUpFormSubmit> | ReturnType<typeof SignUpFormSubmitSuccess>;

function* FormSumbitSaga() { }
export function* SignUpSaga() { }
export interface SignUpType {
    id: string,
    password: string,
    passwordAccept: string,
    no: string,
    name: string
};

const initialState: SignUpType = {
    id: '',
    password: '',
    passwordAccept: '',
    no: '',
    name: ''
};

export default function SignUp(state = initialState, action: ActionType): SignUpType {
    switch (action.type) {
        case FORM_CHANGE:
            return ChangeStateHandler(state, action);
        default: return state;
    }
}