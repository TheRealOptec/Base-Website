import type { ISimplesNode } from "../ISimplesNode.js";
import { SimplesCompiler } from "../SimplesCompiler.js";

export class EmbedNode implements ISimplesNode {

    private static instance: EmbedNode|null = null;

    private static embedNodes: Record<string,ISimplesNode> = {};

    private constructor() {
        SimplesCompiler.addCompilerNode("embed", this);
    }

    public static getInstance(): ISimplesNode {
        if(EmbedNode.instance === null) return new EmbedNode();
        return EmbedNode.instance;
    }

    public static addEmbedNode(name: string, node: ISimplesNode): void {
        this.embedNodes[name] = node;
    }

    private compileEmbedNode(node: Node) {
        const embedNode = EmbedNode.embedNodes[node.nodeName];
    }

    public compile(fragHead: Node, node: Node): void {
        for(let child of node.childNodes) {
            this.compileEmbedNode(child);
        }
    }
}
