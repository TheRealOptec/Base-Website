import type { ISimplesNode } from "../../ISimplesNode.js";
import { EmbedNode } from "../embedNode.js";

export class NewsNode implements ISimplesNode {

    private static instance: NewsNode|null = null;

    private constructor() {
        EmbedNode.addEmbedNode("news", this);
    }

    public static getInstance(): ISimplesNode {
        if(NewsNode.instance === null) return new NewsNode();
        return NewsNode.instance;
    }

    public compile(fragHead: Node, node: Node): void {
        
    }
}
