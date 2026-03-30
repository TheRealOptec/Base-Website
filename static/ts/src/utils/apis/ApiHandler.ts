
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

    public static async makeReq(params: Record<string, any> = {}): Promise<any> {
        return fetch(this.createGetUrl(params));
    }
}
