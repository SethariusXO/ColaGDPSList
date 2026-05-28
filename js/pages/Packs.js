import { store } from "../main.js";

import Spinner from "../components/Spinner.js";

export default {
    components: { Spinner, LevelAuthors },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <p>Coming Soon!</p>
