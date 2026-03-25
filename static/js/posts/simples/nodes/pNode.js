import { SimplesCompiler } from "../SimplesCompiler.js";
export class PNode {
    constructor() {
        SimplesCompiler.addCompilerNode("p", this);
    }
    static getInstance() {
        if (PNode.instance === null)
            return new PNode();
        return PNode.instance;
    }
    compile(fragHead, node) {
        const pElem = document.createElement("p");
        SimplesCompiler.compileNodeChildren(pElem, node);
        fragHead.appendChild(pElem);
    }
}
PNode.instance = null;
//# sourceMappingURL=pNode.js.map