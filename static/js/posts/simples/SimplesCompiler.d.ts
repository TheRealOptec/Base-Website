import type { ISimplesNode } from './ISimplesNode.js';
export declare class SimplesCompiler {
    private static compilerNodes;
    private static stdErr;
    static addCompilerNode(name: string, compNode: ISimplesNode): void;
    static compile(content: string): DocumentFragment;
    private static interpretXML;
    private static interpretNodeList;
    private static interpretNode;
}
//# sourceMappingURL=SimplesCompiler.d.ts.map