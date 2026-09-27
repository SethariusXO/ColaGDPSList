import { fetchList } from "../content.js";

import Spinner from "../components/Spinner.js";

export default {
    components: { Spinner },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-packs">
            <div class="packs-container">
                <table class="packs">
                    <tr>
                        <td>
                            <h4>Cycles Coin Pack</h4>
                        </td>
                        <td class="cyclespack">
                            <div>
                        <input type="checkbox" id: "1">
                        <label for="1">Cycles First Coin (101)</label>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="comingsoon-container">
                <div class="pack">
                   <h1>
                   
                   
                   Coming Soon!</h1>
                </div>
            </div>
      </main>
  `,
}
