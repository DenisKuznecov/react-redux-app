export default function (url, method, data) {
    const headers = {};
    headers['Content-Type'] = 'application/json';

    return fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null
    }).then((response) =>  {
        return response.json();
    }).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    });
}
