import { store } from "../main.js";

import Spinner from "../components/Spinner.js";

export default {
    components: { Spinner, LevelAuthors },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-packs">
            <div class="packs-container">
                <table class="packs" v-if="packs">
                    <tr v-for="([level, err], i) in pack">
                        <td class="soon">
                            <p>Coming Soon!</p>
                        </td>
                    </tr>
                </table>
            </div>
          </main>
     `,
  }
