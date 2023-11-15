// Sample array of game objects (replace this with your actual game data)
const games = [
    { title: "Slope", description: "A fun and challenging game. slope", url: "slope/index.html" },
    { title: "Slope 3", description: "Slope 3", url: "Slope3/index.html" },
    { title: "ovo", description: "", url: "0v0/index.html" },
    { title: "1on1Basketball", description: "", url: "1on1Basketball/index.html" },
    { title: "1on1soccer", description: "soccer", url: "1on1soccer/index.html" },
    { title: "1on1SoccerBigHeads", description: "", url: "1on1SoccerBigHeads/index.html" },
    { title: "1v1lol", description: "", url: "1v1lol/index.html" },
    { title: "1v1space", description: "", url: "1v1space/index.html" },
    { title: "99balls", description: "", url: "99balls/index.html" },
    { title: "Burrito-Bison", description: "", url: "Burrito-Bison/index.html" },
    { title: "Dino-Game", description: "", url: "Dino-Game/index.html" },
    { title: "DriftBoss", description: "", url: "DriftBoss/index.html" },
    { title: "Ducklife1", description: "", url: "Ducklife1/index.html" },
    { title: "Ducklife2", description: "", url: "Ducklife2/index.html" },
    { title: "Ducklife3", description: "", url: "Ducklife3/index.html" },
    { title: "Ducklife4", description: "", url: "Ducklife4/index.html" },
    { title: "Houserofhasards", description: "", url: "Houserofhasards/index.html" },
    { title: "Masked-forces", description: "", url: "Masked-forces/index.html" },
    { title: "My-rusty-submarine", description: "", url: "My-rusty-submarine/index.html" },
    { title: "Rocket-Soccer", description: "", url: "Rocket-Soccer/index.html" },
    { title: "Spiral-Role", description: "", url: "Spiral-Role/index.html" },
    { title: "The-heist", description: "", url: "The-heist/index.html" },
    { title: "There-is-no-game", description: "", url: "There-is-no-game/index.html" },
    { title: "Time-Shooter", description: "", url: "Time-Shooter/index.html" },
    { title: "Time-Shooter-swat", description: "", url: "Time-Shooter-swat/index.html" },
    { title: "Tiny-fishing", description: "", url: "Tiny-fishing/index.html" },
    { title: "TunnelRush", description: "", url: "TunnelRush/index.html" },
    { title: "aqua-park", description: "", url: "aqua-park/index.html" },
    { title: "atari-breakout", description: "", url: "atari-breakout/index.html" },
    { title: "bloxors", description: "", url: "bloxors/index.html" },
    { title: "btd1", description: "", url: "btd1/index.html" },
    { title: "btd2", description: "", url: "btd2/index.html" },
    { title: "btd3", description: "", url: "btd3/index.html" },
    { title: "drift-hunter", description: "", url: "drift-hunter/index.html" },
    { title: "fnf-hex", description: "", url: "fnf-hex/index.html" },
    { title: "fnf-imposter", description: "", url: "fnf-imposter/index.html" },
    { title: "fnf-mobile", description: "", url: "fnf-mobile/index.html" },
    { title: "fnf-shaggy", description: "", url: "fnf-shaggy/index.html" },
    { title: "fnf-slender", description: "", url: "fnf-slender/index.html" },
    { title: "fnf-sonic.exe", description: "", url: "fnf-sonic.exe/index.html" },
    { title: "fnf-stick-man", description: "", url: "fnf-stick-man/index.html" },
    { title: "fnf", description: "", url: "fnf/index.html" },
    { title: "fruit-ninja", description: "", url: "fruit-ninja/index.html" },
    { title: "idle-breakout", description: "", url: "idle-breakout/index.html" },
    { title: "impossible-quiz", description: "", url: "impossiblequiz/index.html" },
    { title: "justfall.lol", description: "", url: "justfall.lol/index.html" },
    { title: "justoneboss", description: "", url: "justoneboss/index.html" },
    { title: "papa-cheseria", description: "", url: "papa-cheseria/index.html" },
    { title: "papa-cupcake", description: "", url: "papa-cupcake/index.html" },
    { title: "papa-dogeria", description: "", url: "papa-dogeria/index.html" },
    { title: "papa-donutria", description: "", url: "papa-donutria/index.html" },
    { title: "papa-freezeria", description: "", url: "papa-freezeria/index.html" },
    { title: "papa-burger", description: "", url: "papa-gurger/index.html" },
    { title: "papa-pancakearia", description: "", url: "papa-pancakearia/index.html" },
    { title: "papa-pasteria", description: "", url: "papa-pasteria/index.html" },
    { title: "papa-pizza", description: "", url: "papa-pizza/index.html" },
    { title: "papa-scooprea", description: "", url: "papa-scooprea/index.html" },
    { title: "papa-suchiria", description: "", url: "papa-suchiria/index.html" },
    { title: "papa-tacomia", description: "", url: "papa-tacomia/index.html" },
    { title: "papa-wingaria", description: "", url: "papa-wingaria/index.html" },
    { title: "retro-bowl", description: "", url: "retro-bowl/index.html" },
    { title: "tanuki-sunset", description: "", url: "tanuki-sunset/index.html" },
    { title: "world-hardest-game2", description: "", url: "world-hardest-game2/index.html" },
    { title: "world-hardest-game", description: "", url: "world-hardest-game/index.html" },
    { title: "worlde", description: "", url: "worlde/index.html" },
    { title: "xTrailRacing", description: "", url: "xTrailRacing/index.html" },
                     ];
// Function to navigate to a random game
function goToRandomGame() {
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGame = games[randomIndex];
    
    if (randomGame && randomGame.url) {
        window.location.href = randomGame.url;
    } else {
        console.error("No games found or invalid URL.");
        // Optionally display an error message or handle the situation accordingly.
    }
}