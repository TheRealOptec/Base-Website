import { SimplesCompiler } from './posts/simples/SimplesCompiler.js';
import {} from './posts/simples/NodeInit.js'; // Initialise compiler nodes
import { ApiHandler } from './utils/apis/ApiHandler.js';

const frag = SimplesCompiler.compile(`
<simples>
    <h>My First Post!</h>
    <p>
        Here's some articles about Apple:
        <embed>
            <news>
                <q>Microsoft</q>
                <from>2026-03-24</from>
                <top>25</top>
                <sortBy>popularity</sortBy>
                <language>en</language>
            </news>
        </embed>
    </p>
</simples>
`);
document.body.appendChild(frag);
