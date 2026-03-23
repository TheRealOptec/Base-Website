import type { ISimplesNode } from "../ISimplesNode.js";
export declare class PNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(frag: DocumentFragment, node: ChildNode): DocumentFragment;
}
//# sourceMappingURL=pNode.d.ts.map