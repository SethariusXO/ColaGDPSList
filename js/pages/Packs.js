import { store } from "../main.js";

import Spinner from "../components/Spinner.js";

export default {
    components: { Spinner, LevelAuthors },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-packs">
            <div class="list-container">
                <table class="packs" v-if="packs">
                    <tr v-for="([pack, err], i) in pack">
                        <td class="soon">
                            <p>Coming Soon!</p>
                </div>
            </div>
',
