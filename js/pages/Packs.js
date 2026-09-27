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
                        <h4>Cycles Coin Pack</h4>
                        <td class="Cyclespack">
                            <div>
                        <input type="checkbox" id: "main">
                        <label for="main">Main List</label>
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
