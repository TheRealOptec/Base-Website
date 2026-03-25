import { ConsoleErrorChannel } from './error_handling/ConsoleErrorChannel.js';
import { SimplesParser } from './SimplesParser.js';
export class SimplesCompiler {
    static addCompilerNode(name, compNode) {
        this.compilerNodes[name] = compNode;
    }
    static compile(content) {
        const frag = SimplesCompiler.interpretXML(document.createDocumentFragment(), SimplesParser.parse(content));
        return frag;
    }
    static interpretXML(frag, xml) {
        return SimplesCompiler.interpretNodeList(frag, xml.documentElement.childNodes);
    }
    static interpretNodeList(frag, nodes) {
        for (let node of nodes) {
            frag = this.interpretNode(frag, node);
        }
        return frag;
    }
    static getCompilerNode(name) {
        return this.compilerNodes[name];
    }
    static compileNodeChildren(fragHead, node) {
        for (let child of node.childNodes) {
            const compNode = SimplesCompiler.getCompilerNode(child.nodeName);
            if (compNode === undefined) {
                this.stdErr.reportError(`${child.nodeName} is not a defined Simples element`);
                return;
            }
            compNode.compile(fragHead, child);
        }
    }
    static interpretNode(frag, node) {
        const compNode = this.compilerNodes[node.nodeName];
        if (compNode === undefined) {
            this.stdErr.reportError(`${node.nodeName} is not a defined Simples element`);
            return frag;
        }
        compNode.compile(frag, node);
        return frag;
    }
}
SimplesCompiler.compilerNodes = {};
// The standard error handler for the simples complier
SimplesCompiler.stdErr = new ConsoleErrorChannel();
//# sourceMappingURL=SimplesCompiler.js.map