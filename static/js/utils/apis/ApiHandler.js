export class ApiHandler {
    static getParamsToUrlOptions(params) {
        const urlParams = new URLSearchParams();
        for (let k in params) {
            urlParams.append(k, params[k]);
        }
        return `${urlParams}`;
    }
    static createGetUrl(params) {
        return `${this.API_ADDR}?${this.getParamsToUrlOptions(params)}`;
    }
    static makeReq(apiFn, params = {}) {
        fetch(this.createGetUrl(params))
            .then(response => response.json())
            .then(apiFn);
    }
}
ApiHandler.API_ADDR = "/mybase/apis";
//# sourceMappingURL=ApiHandler.js.map