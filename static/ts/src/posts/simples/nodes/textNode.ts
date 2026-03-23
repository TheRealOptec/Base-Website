import type { ISimplesNode } from "../ISimplesNode.js";
import { SimplesCompiler } from "../SimplesCompiler.js";

export class TextNode implements ISimplesNode {

    private static instance: TextNode|null = null;

    private constructor() {
        SimplesCompiler.addCompilerNode("#text", this);
    }

    public static getInstance(): ISimplesNode {
        if(TextNode.instance === null) return new TextNode();
        return TextNode.instance;
    }

    public compile(frag: DocumentFragment, node: ChildNode): DocumentFragment {
        console.log(node.textContent);
        return frag;
    }
}
