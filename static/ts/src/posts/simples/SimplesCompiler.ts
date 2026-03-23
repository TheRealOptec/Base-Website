import type { ISimplesErrorChannel } from './ISimplesErrorChanel.js';
import type { ISimplesNode } from './ISimplesNode.js';
import { SimplesParser } from './SimplesParser.js';

export class SimplesCompiler {

    private static compilerNodes: Record<string, ISimplesNode> = {};
    // The standard error handler for the simples complier
    private static stdErr: ISimplesErrorChannel;

    public static compile(content: string): DocumentFragment {
        
        const frag: DocumentFragment = SimplesCompiler.interpretXML(
            document.createDocumentFragment(),
            SimplesParser.parse(content)
        );
        return frag;
    }
    private static interpretXML(frag: DocumentFragment, xml: Document): DocumentFragment {
        return SimplesCompiler.interpretNodeList(frag, xml.documentElement.childNodes);
    }
    private static interpretNodeList(frag: DocumentFragment, nodes : NodeListOf<ChildNode>): DocumentFragment {
        for(let node of nodes) {
            frag = this.interpretNode(frag, node);
        }
        return frag;
    }
    private static interpretNode(frag: DocumentFragment, node: ChildNode): DocumentFragment {
        const compNode: ISimplesNode | undefined = this.compilerNodes[node.nodeName];
        if(compNode === undefined) {
            this.stdErr.reportError(`${node.nodeName} is not a defined Simples element`);
            return frag;
        }
        frag = compNode.compile(frag, node);
        return frag;
    }
}

SimplesCompiler.compile("<a><b></b><b></b><a><c></c></a></a>");
