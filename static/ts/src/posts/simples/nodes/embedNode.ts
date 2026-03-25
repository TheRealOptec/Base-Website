import { CompNodeParent } from "../CompNodeParent.js";
import type { ISimplesNode } from "../ISimplesNode.js";
import { SimplesCompiler } from "../SimplesCompiler.js";

export class EmbedNode extends CompNodeParent implements ISimplesNode {

    private static instance: EmbedNode|null = null;

    private constructor() {
        super();
        SimplesCompiler.addCompilerNode("embed", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(EmbedNode.instance === null) this.instance = new EmbedNode();
        return EmbedNode.instance;
    }

    private compileEmbedNode(fragHead: Node, node: Node) {
        const embedNode = EmbedNode.compNodes[node.nodeName];
        if(embedNode === undefined) {
            SimplesCompiler.reportError(`Not embed available with id ${node.nodeName}`);
            return;
        }
        embedNode.compile(fragHead, node, {});
    }

    public compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        for(let child of node.childNodes) {
            this.compileEmbedNode(fragHead, child);
        }
    }
}
