export default class Service {
    constructor(url) {
        this.url = url;
    }

    get(successCallback, errorCallback) {
        fetch(this.url, {method: 'get'})
            .then(res => res.json())
            .then(
                (result) => {
                    successCallback(result);
                },
                (error) => {
                    errorCallback(error);
                }
            )
    }

    post(data, successCallback, errorCallback) {
         fetch(this.url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)})
            .then(res => res.json())
            .then(
                (result) => {
                    successCallback();
                },
                (error) => {
                    errorCallback(error);
                }
            )
    }
}