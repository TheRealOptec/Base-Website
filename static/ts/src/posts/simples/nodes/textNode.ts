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

    public compile(fragHead: Node, node: Node): void {
        if(fragHead.textContent == null) fragHead.textContent = node.textContent;
        else fragHead.textContent += node.textContent;
    }
}
