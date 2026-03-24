import { SimplesCompiler } from "../SimplesCompiler.js";
export class EmbedNode {
    constructor() {
        SimplesCompiler.addCompilerNode("embed", this);
    }
    static getInstance() {
        if (EmbedNode.instance === null)
            return new EmbedNode();
        return EmbedNode.instance;
    }
    compile(fragHead, node) {
        for (let child of node.childNodes) {
        }
    }
}
EmbedNode.instance = null;
//# sourceMappingURL=embedNode.js.map