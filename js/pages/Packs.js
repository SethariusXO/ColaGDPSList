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
                <table class="coderedpack">
                    <h4>Code Red Pack</h4>
                    <tr>
                        <td class="coderedpack1">
                        <input type="checkbox" id: "4">
                        <label for="4">Code Red (104)</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="coderedpack2">
                        <input type="checkbox" id: "5">
                        <label for="5">Unnerfed Code Red (110)</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="coderedpack3">
                        <input type="checkbox" id: "6">
                        <label for="6">Silent Code Red (151)</label>
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
