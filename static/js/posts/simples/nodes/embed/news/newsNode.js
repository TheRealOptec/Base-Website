import { ApiHandler } from "../../../../../utils/apis/ApiHandler.js";
import { CompNodeParent } from "../../../CompNodeParent.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { EmbedNode } from "../../embedNode.js";
export class NewsNode extends CompNodeParent {
    constructor() {
        super();
        EmbedNode.addCompilerNode("news", this);
    }
    static getInstance() {
        if (this.instance === null)
            this.instance = new NewsNode();
        return this.instance;
    }
    compileNewsNode(fragHead, node, params) {
        const newsNode = NewsNode.compNodes[node.nodeName];
        if (newsNode === undefined) {
            SimplesCompiler.reportError(`${node.nodeName} is not a valid news option`);
            return;
        }
        newsNode.compile(fragHead, node, params);
    }
    static addRequestResults(fragHead, options, json) {
        const articlesArr = (json["articles"] === undefined) ? [] : json["articles"];
        if (options === undefined)
            return;
        const articlesCount = (options["top"] === undefined) ? articlesArr.length : options["top"];
        const listHead = document.createElement("ol");
        for (let i = 0; i < Math.min(articlesCount, articlesArr.length); i++) {
            const article = articlesArr[i];
            const liElem = document.createElement("li");
            const aElem = document.createElement("a");
            aElem.innerHTML = article["title"];
            aElem.setAttribute("href", article["url"]);
            liElem.appendChild(aElem);
            listHead.appendChild(liElem);
        }
        fragHead.appendChild(listHead);
    }
    static normaliseJsonOutput(json) {
        if (json["articles"] === undefined)
            json["articles"] = [];
        return json;
    }
    compile(fragHead, node, params) {
        const apiParams = {
            "req": { "api": "news" },
            "options": {}
        };
        for (let child of node.childNodes) {
            this.compileNewsNode(fragHead, child, apiParams);
        }
        SimplesCompiler.addPromise(ApiHandler.makeReq(apiParams["req"])
            .then(response => NewsNode.normaliseJsonOutput(response.json()))
            .then(json => NewsNode.addRequestResults(fragHead, apiParams["options"], json)));
    }
}
NewsNode.instance = null;
//# sourceMappingURL=newsNode.js.map