import type { ISimplesNode } from "../../../ISimplesNode.js";
import { SimplesCompiler } from "../../../SimplesCompiler.js";
import { NewsNode } from "./newsNode.js";

export class NewsTopNode implements ISimplesNode {
    private static instance: NewsTopNode|null = null;

    private constructor() {
        NewsNode.addCompilerNode("top", this);
    }

    public static getInstance(): ISimplesNode|null {
        if(this.instance === null) NewsTopNode.instance = new NewsTopNode();
        return this.instance;
    }

    compile(fragHead: Node, node: Node, params: Record<string, Record<string, string>>): void {
        if(node.textContent !== null) {
            const req = params["options"];
            if(req === undefined) {
                return;
            }
            req["top"] = node.textContent;
        }
        else SimplesCompiler.reportError("No content provided to from tag - content required");
    }
}
