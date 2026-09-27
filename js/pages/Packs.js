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
                <table class="cyclespack">
                    <h4>Cycles Coin Pack</h4>
                    <tr>
                        <td class="cyclespack1">
                        <input type="checkbox" id: "1">
                        <label for="1">Cycles First Coin (102)</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="cyclespack2">
                        <input type="checkbox" id: "2">
                        <label for="2">Cycles Second Coin (241)</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="cyclespack3">
                        <input type="checkbox" id: "3">
                        <label for="3">Cycles Third Coin (265)</label>
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
