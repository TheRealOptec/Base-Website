import type { ISimplesNode } from "../../../ISimplesNode.js";
export declare class NewsFromNode implements ISimplesNode {
    private static instance;
    private constructor();
    static getInstance(): ISimplesNode | null;
    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void;
}
//# sourceMappingURL=newsFromNode.d.ts.map