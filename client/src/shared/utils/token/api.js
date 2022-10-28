import {getStoredToken} from "./token.js";

const headers = new Headers();
headers.append("authorization", getStoredToken() ? 'Bearer ' + getStoredToken() : undefined);
/*headers.append("content-type", "multipart/form-data");*/
headers.append("Transfer-Encoding", "chunked");

const defaults = {
    endpoints: {
        api: 'https://api.widdlo.com/api/v1/',
        streams: 'https://localhost:8888/'
    }
}

export const api = async (method, url, body) => {

    const request = await fetch(defaults.endpoints.api + url, {
        method: method,
        headers: headers,
        body: body,
    })
    return request.json();
}

export const stream = async (url) => {
    const request = await fetch(defaults.endpoints.streams + url)
    return request.json();
}
