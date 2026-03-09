import List from './pages/List.js';
import PList from './pages/PList';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/Plist', component: PList },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
