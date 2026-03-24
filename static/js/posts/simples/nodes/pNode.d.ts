import type { ISimplesNode } from "../ISimplesNode.js";
export declare class PNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(fragHead: Node, node: ChildNode): void;
}
//# sourceMappingURL=pNode.d.ts.map