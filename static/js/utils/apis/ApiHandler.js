var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    static makeReq() {
        return __awaiter(this, arguments, void 0, function* (params = {}) {
            return fetch(this.createGetUrl(params));
        });
    }
}
ApiHandler.API_ADDR = "/mybase/apis";
//# sourceMappingURL=ApiHandler.js.map