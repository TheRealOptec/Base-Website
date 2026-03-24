import type { ISimplesNode } from "../ISimplesNode.js";
export declare class HNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(fragHead: Node, node: ChildNode): void;
}
//# sourceMappingURL=hNode.d.ts.map