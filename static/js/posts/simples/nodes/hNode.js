import { SimplesCompiler } from "../SimplesCompiler.js";
export class HNode {
    constructor() {
        SimplesCompiler.addCompilerNode("h", this);
    }
    static getInstance() {
        if (HNode.instance === null)
            return new HNode();
        return HNode.instance;
    }
    compile(fragHead, node) {
        const hElem = document.createElement("h1");
        SimplesCompiler.compileNodeChildren(hElem, node);
        fragHead.appendChild(hElem);
    }
}
HNode.instance = null;
//# sourceMappingURL=hNode.js.map