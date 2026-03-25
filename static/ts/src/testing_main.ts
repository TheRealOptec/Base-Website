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
                <q>Apple</q>
                <from>2026-03-24</from>
            </news>
        </embed>
    </p>
</simples>
`);
document.body.appendChild(frag);

ApiHandler.makeReq(json => console.log(json), {
    "api": "news",
    "q": "Apple",
    "from": "2026-03-24"
});