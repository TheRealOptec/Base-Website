import { SimplesCompiler } from "../SimplesCompiler.js";
export class TextNode {
    constructor() {
        SimplesCompiler.addCompilerNode("#text", this);
    }
    static getInstance() {
        if (TextNode.instance === null)
            return new TextNode();
        return TextNode.instance;
    }
    compile(frag, node) {
        console.log(node.textContent);
        return frag;
    }
}
TextNode.instance = null;
//# sourceMappingURL=textNode.js.map