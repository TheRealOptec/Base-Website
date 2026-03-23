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
    compile(frag, node) {
        console.log(node.textContent);
        return frag;
    }
}
PNode.instance = null;
//# sourceMappingURL=pNode.js.map