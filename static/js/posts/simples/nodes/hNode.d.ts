import type { ISimplesNode } from "../ISimplesNode.js";
export declare class HNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode;
    compile(fragHead: Node, node: Node): void;
}
//# sourceMappingURL=hNode.d.ts.map