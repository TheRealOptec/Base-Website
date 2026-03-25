import { ApiHandler } from "../../../../../utils/apis/ApiHandler.js";
import { CompNodeParent } from "../../../CompNodeParent.js";
import type { ISimplesNode } from "../../../ISimplesNode.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { EmbedNode } from "../../embedNode.js";

export class NewsNode extends CompNodeParent implements ISimplesNode {

    private static instance: NewsNode|null = null;

    private constructor() {
        super();
        EmbedNode.addCompilerNode("news", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(this.instance === null) this.instance = new NewsNode();
        return this.instance;
    }

    private compileNewsNode(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        const newsNode = NewsNode.compNodes[node.nodeName];
        if(newsNode === undefined) {
            SimplesCompiler.reportError(`${node.nodeName} is not a valid news option`);
            return;
        }
        newsNode.compile(fragHead, node, params);
    }

    public compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        const apiParams: Record<string, Record<string, string>> = {
            "req": {"api": "news"},
            "options": {}
        };
        for(let child of node.childNodes) {
            this.compileNewsNode(fragHead, child, apiParams);
        }
        ApiHandler.makeReq(json => console.log(json), apiParams["req"]);
    }
}
