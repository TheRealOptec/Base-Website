
export class ApiHandler {
    private static API_ADDR: string = "/mybase/apis";

    private static getParamsToUrlOptions(params: Record<string, any>): string {
        const urlParams = new URLSearchParams();
        for(let k in params) {
            urlParams.append(k, params[k]);
        }
        return `${urlParams}`;
    }

    private static createGetUrl(params: Record<string, any>): string {
        return `${this.API_ADDR}?${this.getParamsToUrlOptions(params)}`;
    }

    public static makeReq(apiFn: ((value: any) => any), params: Record<string, any> = {}) {
        fetch(this.createGetUrl(params))
        .then(response => response.json())
        .then(apiFn);
    }
}
