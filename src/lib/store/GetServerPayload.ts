interface PostServerInterface {
    [key: string]: PostServerElement | any
}
interface PostServerElement {
    value: any,
    required?: boolean
}
function GetServerPayload(data: PostServerInterface) {
    const payload: any = {};
    const dataEntries = Object.entries(data);
    for (const [key, value] of dataEntries) {
        if (typeof value !== 'object') {
            payload[key] = value;
            continue;
        }
        const v = value as PostServerElement;
        if (v.required && !v.value) {
            alert("필수 항목이 비어 있습니다.");
            return;
        }
        payload[key] = v.value;
    }

    return payload;
}

export default GetServerPayload;