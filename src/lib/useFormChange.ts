import React from 'react'
import { useDispatch } from 'react-redux';
function useFormChange(dispatcher: any) {
    const dispatch = useDispatch();

    const onChange = React.useCallback((field: string) => {
        return (e: React.ChangeEvent) => {
            dispatch(dispatcher({
                [field]: (e.target as any).value
            }))
        }
    }, [dispatch, dispatcher]);

    return onChange;
}

export default useFormChange;