import type { ISimplesNode } from "../../../ISimplesNode.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";

export class NewsSortyByNode implements ISimplesNode {
    private static instance: NewsSortyByNode|null = null;

    private constructor() {
        NewsNode.addCompilerNode("sortBy", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(this.instance === null) NewsSortyByNode.instance = new NewsSortyByNode();
        return this.instance;
    }

    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        if(node.textContent !== null) {
            const req = params["req"];
            if(req === undefined) {
                return;
            }
            req["sortBy"] = node.textContent;
        }
        else SimplesCompiler.reportError("No content provided to sortBy tag - content required");
    }
}
