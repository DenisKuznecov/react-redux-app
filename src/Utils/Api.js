export default function (url, method, data = null) {
    const headers = {};
    headers['Content-Type'] = 'application/json';

    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(data)
    }).then((response) =>  {
        return response.json();
    }).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    });
}
