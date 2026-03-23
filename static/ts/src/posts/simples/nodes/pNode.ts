import type { ISimplesNode } from "../ISimplesNode";
import { SimplesCompiler } from "../SimplesCompiler";

export class PNode implements ISimplesNode {

    private static instance: PNode|null = null;

    private constructor() {
        SimplesCompiler.addCompilerNode("p", this);
    }

    public static getInstance(): ISimplesNode {
        if(PNode.instance === null) return new PNode();
        return PNode.instance;
    }

    public compile(frag: DocumentFragment, node: ChildNode): DocumentFragment {
        throw new Error("Method not implemented.");
    }
}
