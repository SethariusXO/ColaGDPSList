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
data: () => ({
        packs: [],
        loading: true,
        selected: 0,
        errors: [],
    }),
    computed: {
        level() {
            return this.list[this.selected][0];
        },
            );
        },
    },
    async mounted() {
        // Error handling
        if (!this.list) {
            this.errors = [
                "Failed to load pages. Retry in a few minutes or notify list staff.",
            ];
        } else {
            this.errors.push(
                ...this.list
                    .filter(([_, err]) => err)
                    .map(([_, err]) => {
                        return `Failed to load packs. (${err}.json)`;
                    })
            );
        }

        this.loading = false;
    },
    methods: {
    },
};
