import type { ISimplesNode } from "../ISimplesNode.js";
import { SimplesCompiler } from "../SimplesCompiler.js";

export class HNode implements ISimplesNode {

    private static instance: HNode|null = null;

    private constructor() {
        SimplesCompiler.addCompilerNode("h", this);
    }

    public static getInstance(): ISimplesNode {
        if(HNode.instance === null) return new HNode();
        return HNode.instance;
    }

    public compile(fragHead: Node, node: ChildNode): void {
        const hElem = document.createElement("h1");
        SimplesCompiler.compileNodeChildren(hElem, node);
        fragHead.appendChild(hElem);
    }
}
