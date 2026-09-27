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
                <table class="oldpack">
                    <h4>Old Top 3 Pack</h4>
                    <tr>
                        <td class="oldpack1">
                        <input type="checkbox" id: "7">
                        <label for="7">Cycles First Coin (102)</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="oldpack2">
                        <input type="checkbox" id: "8">
                        <label for="8">Apocalyptic (105)</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="oldpack3">
                        <input type="checkbox" id: "9">
                        <label for="9">Code Red (104)</label>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="comingsoon-container">
                <div class="pack">
                   <h1>CDL Packs</h1>
                </div>
            </div>
            <div class="info-container">
                <div class="info">
                    <h2>Packs Info</h2>
                    <p>
                        Similarly to the Roulette page, anything on this page does not change scores or levels on the other pages.
                        Which means that you do not gain points for completing packs, however they're (hopefully) a fun challenge.
                    </p>
                    <p>
                        The colours on the pack titles do not represent difficulty, they represent the colour of the levels.
                    </p>
                    <p>
                        Tick off levels as you beat them, however this page doesn't save automatically unfortunately.
                    </p>
                    <p>
                        If you would like to suggest a CDL Pack, then join the discord server by clicking the discord icon.
                    </p>
                </div>
            </div>
      </main>
  `,
}
