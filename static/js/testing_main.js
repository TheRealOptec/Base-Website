import { SimplesCompiler } from './posts/simples/SimplesCompiler.js';
import {} from './posts/simples/NodeInit.js'; // Initialise compiler nodes
const frag = SimplesCompiler.compile(`
<simples>
    <h>My First Post!</h>
    <p>
        Here's some music I like:
        <embed>
            Huh
        </embed>
    </p>
</simples>
`);
document.body.appendChild(frag);
//# sourceMappingURL=testing_main.js.map