import { CompNodeParent } from "../CompNodeParent.js";
import { SimplesCompiler } from "../SimplesCompiler.js";
export class EmbedNode extends CompNodeParent {
    constructor() {
        super();
        SimplesCompiler.addCompilerNode("embed", this);
    }
    static getInstance() {
        if (EmbedNode.instance === null)
            this.instance = new EmbedNode();
        return EmbedNode.instance;
    }
    compileEmbedNode(fragHead, node) {
        const embedNode = EmbedNode.compNodes[node.nodeName];
        if (embedNode === undefined) {
            SimplesCompiler.reportError(`Not embed available with id ${node.nodeName}`);
            return;
        }
        embedNode.compile(fragHead, node, {});
    }
    compile(fragHead, node, params) {
        for (let child of node.childNodes) {
            this.compileEmbedNode(fragHead, child);
        }
    }
}
EmbedNode.instance = null;
//# sourceMappingURL=embedNode.js.map