import { SimplesCompiler } from "../SimplesCompiler.js";
export class PNode {
    constructor() {
        SimplesCompiler.addCompilerNode("p", this);
    }
    static getInstance() {
        if (PNode.instance === null)
            this.instance = new PNode();
        return PNode.instance;
    }
    compile(fragHead, node, params) {
        const pElem = document.createElement("p");
        SimplesCompiler.compileNodeChildren(pElem, node);
        fragHead.appendChild(pElem);
        return undefined;
    }
}
PNode.instance = null;
//# sourceMappingURL=pNode.js.map