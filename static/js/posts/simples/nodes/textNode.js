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
    compile(fragHead, node) {
        if (fragHead.textContent == null)
            fragHead.textContent = node.textContent;
        else
            fragHead.textContent += node.textContent;
    }
}
TextNode.instance = null;
//# sourceMappingURL=textNode.js.map