import type { ISimplesNode } from "../ISimplesNode.js";
export declare class PNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode | null;
    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void;
}
//# sourceMappingURL=pNode.d.ts.map