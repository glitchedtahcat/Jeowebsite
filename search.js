// Sample array of game objects (replace this with your actual game data)
const games = [
    { title: "Advance wars1", description: "A fun and challenging game. slope", url: "Advance-wars1/index.html" },
    { title: "Advance wars2", description: "A fun and challenging game. slope", url: "Advance-wars2/index.html" },
    { title: "Donkey Kong-Country1", description: "A fun and challenging game. slope", url: "Donkey-Kong-Country1/index.html" },
    { title: "Donkey Kong Country 3", description: "A fun and challenging game. slope", url: "DonkeyKong3/index.html" },
    { title: "Donkey Kong Country 2", description: "A fun and challenging game. slope", url: "DonkeyKongCountry2/index.html" },
    { title: "Pokemon Fire Red", description: "A fun and challenging game. slope", url: "Pokemon-Fire-Red/index.html" },
    { title: "Pokemon Saphire", description: "A fun and challenging game. slope", url: "Pokemon-Saphire/index.html" },
    { title: "Pokemon emrald", description: "A fun and challenging game. slope", url: "Pokemon-emrald/index.html" },
    { title: "Pokemon leafGreen", description: "A fun and challenging game. slope", url: "Pokemon-leafGreen/index.html" },
    { title: "Pokemon mystery", description: "A fun and challenging game. slope", url: "Pokemon-mystery/index.html" },
    { title: "Pokemon ruby", description: "A fun and challenging game. slope", url: "Pokemon-ruby/index.html" },
    { title: "Slope", description: "A fun and challenging game. slope", url: "slope/index.html" },
    { title: "Slope 3", description: "Slope 3", url: "Slope3/index.html" },
    { title: "ovo", description: "", url: "0v0/index.html" },
    { title: "1on1Basketball", description: "", url: "1on1Basketball/index.html" },
    { title: "1on1soccer", description: "soccer", url: "1on1soccer/index.html" },
    { title: "1on1SoccerBigHeads", description: "", url: "1on1SoccerBigHeads/index.html" },
    { title: "1v1lol", description: "", url: "1v1lol/index.html" },
    { title: "1v1space", description: "", url: "1v1space/index.html" },
    { title: "99balls", description: "", url: "99balls/index.html" },
    { title: "Burrito Bison", description: "", url: "Burrito-Bison/index.html" },
    { title: "Dino Game", description: "", url: "Dino-Game/index.html" },
    { title: "DriftBoss", description: "", url: "DriftBoss/index.html" },
    { title: "Ducklife1", description: "", url: "Ducklife1/index.html" },
    { title: "Ducklife2", description: "", url: "Ducklife2/index.html" },
    { title: "Ducklife3", description: "", url: "Ducklife3/index.html" },
    { title: "Ducklife4", description: "", url: "Ducklife4/index.html" },
    { title: "Houserofhasards", description: "", url: "Houserofhasards/index.html" },
    { title: "Masked forces", description: "", url: "Masked-forces/index.html" },
    { title: "My rusty submarine", description: "", url: "My-rusty-submarine/index.html" },
    { title: "Rocket Soccer", description: "", url: "Rocket-Soccer/index.html" },
    { title: "Spiral Role", description: "", url: "Spiral-Role/index.html" },
    { title: "The heist", description: "", url: "The-heist/index.html" },
    { title: "There-is-no-game", description: "", url: "There-is-no-game/index.html" },
    { title: "Time Shooter", description: "", url: "Time-Shooter/index.html" },
    { title: "Time Shooter-swat", description: "", url: "Time-Shooter-swat/index.html" },
    { title: "Tiny fishing", description: "", url: "Tiny-fishing/index.html" },
    { title: "TunnelRush", description: "", url: "TunnelRush/index.html" },
    { title: "aqua park", description: "", url: "aqua-park/index.html" },
    { title: "atari breakout", description: "", url: "atari-breakout/index.html" },
    { title: "bloxors", description: "", url: "bloxors/index.html" },
    { title: "btd1", description: "", url: "btd1/index.html" },
    { title: "btd2", description: "", url: "btd2/index.html" },
    { title: "btd3", description: "", url: "btd3/index.html" },
    { title: "drift hunter", description: "", url: "drift-hunter/index.html" },
    { title: "fnf hex", description: "", url: "fnf-hex/index.html" },
    { title: "fnf imposter", description: "", url: "fnf-imposter/index.html" },
    { title: "fnf mobile", description: "", url: "fnf-mobile/index.html" },
    { title: "fnf shaggy", description: "", url: "fnf-shaggy/index.html" },
    { title: "fnf slender", description: "", url: "fnf-slender/index.html" },
    { title: "fnf sonic.exe", description: "", url: "fnf-sonic.exe/index.html" },
    { title: "fnf stick-man", description: "", url: "fnf-stick-man/index.html" },
    { title: "fnf", description: "", url: "fnf/index.html" },
    { title: "fruit ninja", description: "", url: "fruit-ninja/index.html" },
    { title: "idle breakout", description: "", url: "idle-breakout/index.html" },
    { title: "impossible quiz", description: "", url: "impossiblequiz/index.html" },
    { title: "justfall.lol", description: "", url: "justfall.lol/index.html" },
    { title: "justoneboss", description: "", url: "justoneboss/index.html" },
    { title: "papa cheseria", description: "", url: "papa-cheseria/index.html" },
    { title: "papa cupcake", description: "", url: "papa-cupcake/index.html" },
    { title: "papa dogeria", description: "", url: "papa-dogeria/index.html" },
    { title: "papa donutria", description: "", url: "papa-donutria/index.html" },
    { title: "papa freezeria", description: "", url: "papa-freezeria/index.html" },
    { title: "papa burger", description: "", url: "papa-gurger/index.html" },
    { title: "papa pancakearia", description: "", url: "papa-pancakearia/index.html" },
    { title: "papa pasteria", description: "", url: "papa-pasteria/index.html" },
    { title: "papa pizza", description: "", url: "papa-pizza/index.html" },
    { title: "papa scooprea", description: "", url: "papa-scooprea/index.html" },
    { title: "papa suchiria", description: "", url: "papa-suchiria/index.html" },
    { title: "papa tacomia", description: "", url: "papa-tacomia/index.html" },
    { title: "papa wingaria", description: "", url: "papa-wingaria/index.html" },
    { title: "retro bowl", description: "", url: "retro-bowl/index.html" },
    { title: "tanuki sunset", description: "", url: "tanuki-sunset/index.html" },
    { title: "world hardest-game2", description: "", url: "world-hardest-game2/index.html" },
    { title: "world hardest-game", description: "", url: "world-hardest-game/index.html" },
    { title: "worlde", description: "", url: "worlde/index.html" },
    { title: "xTrailRacing", description: "", url: "xTrailRacing/index.html" },
    { title: "getaway shootout", description: "", url: "getaway-shootout/index.html" },
    { title: "champion island", description: "", url: "champion-island/index.html" },
    { title: "cell machine", description: "", url: "cell-machine/index.html" },
    { title: "Subway Surfers ", description: "", url: "bus and subway/index.html" },
    { title: "burger and frights  ", description: "", url: "burger and frights/index.html" },
    { title: "Getaway Shootout", description: "A fun and challenging game. slope", url: "getaway-shootout/index.html" },
    { title: "Learn To Fly", description: "A fun and challenging game. slope", url: "learntofly/index.html" },
    { title: "Learn to Fly 2", description: "A fun and challenging game. slope", url: "learntofly2/index.html" },
    { title: "Mandalin Stunt Car 2", description: "A fun and challenging game. slope", url: "madalin-stunt-cars-2/index.html" },
    { title: "Mandalin Stunt Car 3", description: "A fun and challenging game. slope", url: "madalin-stunt-cars-3/index.html" },
    { title: "Minecraft", description: "A fun and challenging game. slope", url: "minecraft-18/index.html" },
    { title: "Pandemic 2", description: "A fun and challenging game. slope", url: "pandemic2/index.html" },
    { title: "100 ng", description: "A fun and challenging game. slope", url: "100ng/index.html" },
    { title: "a dance of fire and ice", description: "A fun and challenging game. slope", url: "a-dance-of-fire-and-ice/index.html" },
    { title: "a dark room", description: "A fun and challenging game. slope", url: "adarkroom/index.html" },
    { title: "achievement unlocked", description: "A fun and challenging game. slope", url: "achievementunlocked/index.html" },
    { title: "adrenaline challenge", description: "A fun and challenging game. slope", url: "adrenalinechallenge/index.html" },
    { title: "adventure drivers", description: "A fun and challenging game. slope", url: "adventure-drivers/index.html" },
    { title: "ages of conflict", description: "A fun and challenging game. slope", url: "ages-of-conflict/index.html" },
    { title: "alien hominid", description: "A fun and challenging game. slope", url: "alienhominid/index.html" },
    { title: "among us", description: "A fun and challenging game. slope", url: "among-us/index.html" },
    { title: "amazing rope police", description: "A fun and challenging game. slope", url: "amazing-rope-police/index.html" },
    { title: "amidst the clouds", description: "A fun and challenging game. slope", url: "amidst-the-clouds/index.html" },
    { title: "angel under", description: "A fun and challenging game. slope", url: "angelunder/index.html" },
    { title: "angry sharks", description: "A fun and challenging game. slope", url: "angry-sharks/index.html" },
    { title: "aquapark slides", description: "A fun and challenging game. slope", url: "aquapark-slides/index.html" },
    { title: "astray", description: "A fun and challenging game. slope", url: "astray/index.html" },
    { title: "avalanche", description: "A fun and challenging game. slope", url: "avalanche/index.html" },
    { title: "awesome tanks 2", description: "A fun and challenging game. slope", url: "awesometanks2/index.html" },
    { title: "backrooms", description: "A fun and challenging game. slope", url: "backrooms/index.html" },
    { title: "backrooms 2d", description: "A fun and challenging game. slope", url: "backrooms-2d/index.html" },
    { title: "bacon may die", description: "A fun and challenging game. slope", url: "bacon-may-die/index.html" },
    { title: "bad ice cream", description: "A fun and challenging game. slope", url: "bad-ice-cream/index.html" },
    { title: "bad ice cream 2", description: "A fun and challenging game. slope", url: "bad-ice-cream-2/index.html" },
    { title: "bad ice cream-3", description: "A fun and challenging game. slope", url: "bad-ice-cream-3/index.html" },
    { title: "baldis basics", description: "A fun and challenging game. slope", url: "baldis-basics/index.html" },
    { title: "ball dodge", description: "A fun and challenging game. slope", url: "balldodge/index.html" },
    { title: "ballistic chickens", description: "A fun and challenging game. slope", url: "ballistic-chickens/index.html" },
    { title: "basket random", description: "A fun and challenging game. slope", url: "basket-random/index.html" },
    { title: "basketbros io", description: "A fun and challenging game. slope", url: "basketbros-io/index.html" },
    { title: "basketball stars", description: "A fun and challenging game. slope", url: "basketball-stars/index.html" },
    { title: "battle forgondor", description: "A fun and challenging game. slope", url: "battleforgondor/index.html" },
    { title: "big red button", description: "A fun and challenging game. slope", url: "bigredbutton/index.html" },
    { title: "bitlife", description: "A fun and challenging game. slope", url: "bitlife/index.html" },
    { title: "blachole square", description: "A fun and challenging game. slope", url: "blacholesquare/index.html" },
    { title: "black knight", description: "A fun and challenging game. slope", url: "blackknight/index.html" },
    { title: "block post", description: "A fun and challenging game. slope", url: "blockpost/index.html" },
    { title: "bonk io", description: "A fun and challenging game. slope", url: "bonkio/index.html" },
    { title: "box head 2 to play", description: "A fun and challenging game. slope", url: "boxhead2play/index.html" },
    { title: "boxing random", description: "A fun and challenging game. slope", url: "boxing-random/index.html" },
    { title: "breaking the bank", description: "A fun and challenging game. slope", url: "breakingthebank/index.html" },
    { title: "cannon basketball 4", description: "A fun and challenging game. slope", url: "cannon-basketball-4/index.html" },
    { title: "canyon defense", description: "A fun and challenging game. slope", url: "canyondefense/index.html" },
    { title: "cars simulator", description: "A fun and challenging game. slope", url: "cars-simulator/index.html" },
    { title: "cell machine", description: "A fun and challenging game. slope", url: "cell-machine/index.html" },
    { title: "checkers", description: "A fun and challenging game. slope", url: "checkers/index.html" },
    { title: "circlo", description: "A fun and challenging game. slope", url: "circlo/index.html" },
    { title: "connect 3", description: "A fun and challenging game. slope", url: "connect3/index.html" },
    { title: "core ball", description: "A fun and challenging game. slope", url: "core-ball/index.html" },
    { title: "craft mine", description: "A fun and challenging game. slope", url: "craftmine/index.html" },
    { title: "creative kill chamber", description: "A fun and challenging game. slope", url: "creativekillchamber/index.html" },
    { title: "crossyroad", description: "A fun and challenging game. slope", url: "crossyroad/index.html" },
    { title: "csgo clicker", description: "A fun and challenging game. slope", url: "csgo-clicker/index.html" },
    { title: "Cut The Rope", description: "A fun and challenging game. slope", url: "ctr/index.html" },
    { title: "Cut The Rope Holiday", description: "A fun and challenging game. slope", url: "ctr-holiday/index.html" },
    { title: "cube field", description: "A fun and challenging game. slope", url: "cubefield/index.html" },
    { title: "dante", description: "A fun and challenging game. slope", url: "dante/index.html" },
    { title: "deal or no deal", description: "A fun and challenging game. slope", url: "deal-or-no-deal/index.html" },
    { title: "deepest sword", description: "A fun and challenging game. slope", url: "deepest-sword/index.html" },
    { title: "defend the tank", description: "A fun and challenging game. slope", url: "defend-the-tank/index.html" },
    { title: "Doge Miner", description: "A fun and challenging game. slope", url: "DogeMiner/index.html" },
    { title: "Doge miner 2", description: "A fun and challenging game. slope", url: "Dogeminer2/index.html" },
    { title: "doodle jump", description: "A fun and challenging game. slope", url: "doodle-jump/index.html" },
    { title: "dragon vs bricks", description: "A fun and challenging game. slope", url: "dragon-vs-bricks/index.html" },
    { title: "draw the hill", description: "A fun and challenging game. slope", url: "draw-the-hill/index.html" },
    { title: "dumb ways to die", description: "A fun and challenging game. slope", url: "dumbwaystodie/index.html" },
    { title: "edge surf", description: "A fun and challenging game. slope", url: "edge-surf/index.html" },
    { title: "earn to die", description: "A fun and challenging game. slope", url: "earntodie/index.html" },
    { title: "eel slap", description: "A fun and challenging game. slope", url: "eel-slap/index.html" },
    { title: "escaping the prison", description: "A fun and challenging game. slope", url: "escapingtheprison/index.html" },
    { title: "elastic man", description: "A fun and challenging game. slope", url: "elasticman/index.html" },
    { title: "evolution", description: "A fun and challenging game. slope", url: "evolution/index.html" },
    { title: "evil glitch", description: "A fun and challenging game. slope", url: "evil-glitch/index.html" },
    { title: "factory balls", description: "A fun and challenging game. slope", url: "factoryballs/index.html" },
    { title: "exo", description: "A fun and challenging game. slope", url: "exo/index.html" },
    { title: "fancy pants adventures", description: "A fun and challenging game. slope", url: "fancypantsadventures/index.html" },
    { title: "fake virus", description: "A fun and challenging game. slope", url: "fake-virus/index.html" },
    { title: "There is no game", description: "A fun and challenging game. slope", url: "There-is-no-game/index.html" },
    { title: "google snake", description: "A fun and challenging game. slope", url: "google-snake/index.html" },
    { title: "7 Days Without Rain", description: "A captivating game with an intriguing storyline.", url: "7-days-norain/index.html" },
    { title: "Pandemic", description: "An intense strategy game to save the world from a global pandemic.", url: "pandemic/index.html" },
{ title: "Stick War", description: "Command your army and conquer the Stick World.", url: "stickwar/index.html" },
{ title: "Stick War 2", description: "Sequel to Stick War, featuring new challenges and strategies.", url: "stickwar2/index.html" },
{ title: "Cereal And Milk", description: "A delightful game combining cereal and milk in a unique adventure.", url: "cerealandmilf/index.html" },
{ title: "Portal", description: "A mind-bending puzzle game set in a mysterious facility.", url: "portal-flash/index.html" },
{ title: "Gem Craft", description: "Harness the power of gems to defend against waves of enemies.", url: "gem-craft/index.html" },
{ title: "Goal In One", description: "Test your precision in this challenging golf-themed game.", url: "goal-in-one/index.html" },
{ title: "Hero Simulator", description: "Embark on a heroic journey and build your legend.", url: "hero-simulator/index.html" },
{ title: "Knife Party", description: "Navigate through a dangerous knife-filled environment.", url: "knife-party/index.html" },
{ title: "Knight Fall", description: "Guide your knight through a falling tower of obstacles.", url: "knight-fall/index.html" },
{ title: "Bloons Player Pack 2", description: "Pop bloons in this fun and challenging player pack.", url: "bloons-player-pack2/index.html" },
{ title: "Bloons Player Pack 3", description: "More bloon-popping fun in the third player pack installment.", url: "bloons-player-pack3/index.html" },
{ title: "Bloons Player Pack 4", description: "Continue the bloon-popping adventure with pack 4.", url: "bloons-player-pack4/index.html" },
{ title: "Boomber Man", description: "Classic bomberman game with a strategic twist.", url: "bomberman/index.html" },
{ title: "Drive Mad", description: "Race through challenging tracks and become the ultimate driver.", url: "drive-mad/index.html" },
{ title: "Stack Bumb 3D", description: "Experience a 3D stacking challenge in this addictive game.", url: "stack-bumb-3d/index.html" },
{ title: "Ninja VS Evil Corpe", description: "Embark on a ninja adventure to defeat the evil corporation.", url: "ninjaVsEvilcorpe/index.html" },
{ title: "Slime Rush TD", description: "Defend against waves of slimes in this tower defense game.", url: "slime-rush-td/index.html" },
{ title: "Space Company", description: "Build and manage your own space company in this strategic game.", url: "space-company/index.html" },
{ title: "Solitaire", description: "Enjoy the classic game of Solitaire with a modern twist.", url: "solitary/index.html" },
{ title: "Tactical Assasin 2", description: "Take on tactical missions as a skilled assassin in this sequel.", url: "tactical-asasin-2/index.html" },
{ title: "The Final Earth", description: "Create and manage your own civilization on the final frontier.", url: "the-final-earth/index.html" },
{ title: "Jetpack Joyride", description: "Soar through the skies with your jetpack in this endless runner.", url: "jetpack-joyride/index.html" },
{ title: "Run 3", description: "Navigate through space tunnels and overcome obstacles in this running game.", url: "run-3/index.html" },
{ title: "Jonny Trigger", description: "Embark on a thrilling shooting adventure with Jonny Trigger.", url: "jonny-trigger/index.html" },
{ title: "Hanger 2", description: "Swing through challenging levels in this physics-based game.", url: "hanger-2/index.html" },
{ title: "Sling Tomb", description: "Use your sling to navigate through ancient tombs and solve puzzles.", url: "sling-tomb/index.html" },
{ title: "Save my Pet", description: "Rescue adorable pets in this puzzle-solving game.", url: "save-my-pet/index.html" },
{ title: "Moto X3M Winter", description: "Ride your bike through winter-themed obstacle courses.", url: "moto-x3m-winter/index.html" },
{ title: "Moto X3M 3", description: "More challenging levels and stunts in the third installment of Moto X3M.", url: "moto-x3m-3/index.html" },
{ title: "Noob Miner", description: "Become a miner and collect valuable resources in this adventure.", url: "noob-miner/index.html" },
{ title: "Fnaf", description: "Experience the horror of Five Nights at Freddy's in this fan-made game.", url: "fnaf/index.html" },
{ title: "One Escape", description: "Plan your escape in this thrilling and strategic game.", url: "one-escape/index.html" },
{ title: "Castel Wars Modern", description: "Engage in modern castle warfare and conquer your opponents.", url: "castel-modern/index.html" },
{ title: "Hole.io", description: "Absorb everything in your path and become the biggest hole in the city.", url: "hole.io/index.html" },
{ title: "Uno", description: "Enjoy the classic card game Uno online.", url: "uno/index.html" },
{ title: "TABS", description: "Engage in epic battles with Totally Accurate Battle Simulator (TABS).", url: "battle-sim/index.html" },
{ title: "Draw Your Car!", description: "Unleash your creativity and draw your own car in this fun game.", url: "car-drawing/index.html" },
{ title: "Traffic Run", description: "Navigate through traffic and reach the finish line in this endless runner.", url: "traffic-rrun/index.html" },
{ title: "Tube Jumpers", description: "Compete with friends in this exciting tube jumping multiplayer game.", url: "tube-jumpers/index.html" },
{ title: "Happy Wheels", description: "Experience a unique and often hilarious physics-based racing game.", url: "happy-wheels/index.html" },
{ title: "Fire Boy Water Girl", description: "Solve puzzles with the elemental duo in this cooperative platformer.", url: "fire-boy-water/index.html" },
{ title: "Vex 3", description: "Navigate through challenging levels in this stickman platformer.", url: "vex3/index.html" },
{ title: "Vex 4", description: "Continue the vexing adventure with new challenges and levels.", url: "vex4/index.html" },
{ title: "Vex 5", description: "Explore more vexing levels and obstacles in this platformer.", url: "vex5/index.html" },
{ title: "Vex 6", description: "Conquer new challenges and obstacles in the latest Vex installment.", url: "vex6/index.html" },
{ title: "Vex 7", description: "Conquer new challenges and obstacles in the seventh installment of Vex.", url: "vex7/index.html" },
{ title: "Learn to Fly Idle", description: "Upgrade and evolve your penguin in this idle flying game.", url: "learn-to-fly-idle/index.html" },
{ title: "Bad Time Sim", description: "Experience a challenging simulation inspired by a certain iconic game.", url: "bad-time-sim/index.html" },
{ title: "Fishing.io", description: "Compete with other players in this online fishing multiplayer game.", url: "fishing.io/index.html" },
{ title: "Hang Man", description: "Test your word-guessing skills in this classic hangman game.", url: "hangman/index.html" },
{ title: "Jelly Truck", description: "Navigate through jelly obstacles in this unique truck-driving game.", url: "jelly-truck/index.html" },
{ title: "Jack Smith", description: "Craft weapons for heroes and battle monsters in this strategy game.", url: "jack-smith/index.html" },
{ title: "Indian Truck Simulator", description: "Experience the challenges of driving a truck in Indian Truck Simulator.", url: "indian-truck-sim/index.html" },
{ title: "Johnny Upgrade", description: "Upgrade Johnny and take on challenges in this action-packed game.", url: "jonny-upgrade/index.html" },
{ title: "JayWalking Simulator", description: "Simulate the daring act of jaywalking and avoid oncoming traffic.", url: "jay-walking/index.html" },
{ title: "College Retro Bowl", description: "Experience college football in this retro-style bowl game.", url: "colege-retro-bowl/index.html" },
{ title: "Big Tower Tiny Square", description: "Navigate through a big tower filled with tiny square challenges.", url: "big-tower-tiny-square/index.html" },
{ title: "Tomb of Mask", description: "Explore the mysterious tomb and solve puzzles in Tomb of Mask.", url: "tomb-of-mask/index.html" },
{ title: "Scratch Wars", description: "Engage in epic battles in this unique scratch-themed game.", url: "scratch-wars/index.html" },
{ title: "Getting Over It", description: "Climb obstacles using a hammer in this challenging game.", url: "getting-over-it/index.html" },
{ title: "Tower Defence Game", description: "Defend against waves of enemies in this tower defense game.", url: "Tower-defence-game/index.html" },
{ title: "Animal Stacking", description: "Stack animals creatively in this charming stacking game.", url: "animal-stacking/index.html" },
{ title: "Geometry Dash", description: "Jump and dash through challenging levels in Geometry Dash.", url: "geometry-dash/index.html" },
{ title: "Tower Of Scratch", description: "Climb the Tower of Scratch and overcome challenges.", url: "tower-of-scratch/index.html" },
{ title: "Golf Battle Online", description: "Compete against other players in this online golf battle.", url: "golf-battle/index.html" },
{ title: "Random Tycoon Thing", description: "Manage and build in this random tycoon simulation game.", url: "Random-tycoon/index.html" },
{ title: "Sort The Court", description: "Make decisions and rule your kingdom wisely in this court simulation.", url: "sort-the-court/index.html" },
{ title: "Toss The Turtle", description: "Launch the turtle as far as you can in this distance game.", url: "toss-ther-turtle/index.html" },
{ title: "Matrix Rampage", description: "Enter the Matrix and engage in intense rampaging action.", url: "matrix-rampage/index.html" },
{ title: "Paper Minecraft", description: "Explore and build in a pixelated Minecraft world in this paper-themed version.", url: "paper-minecraft/index.html" },
{ title: "Mystic Valley", description: "Embark on an adventure in the mystical valley and discover its secrets.", url: "mystic-valley/index.html" },
{ title: "Station Meltdown", description: "Navigate through a space station in meltdown and survive the challenges.", url: "stationmeldown/index.html" },
{ title: "Osu!", description: "Test your rhythm and coordination skills in this popular music game.", url: "osu!/index.html" },
{ title: "Smash Karts", description: "Experience fast-paced kart racing in this exciting new version of SmashKarts.", url: "smash-KARTS/index.html" },
{ title: "Fortz", onclick: "openMyWindow('https://bonbang.github.io/store3/fortz/')" },
{ title: "Cyber Cars Punk Racing", onclick: "openMyWindow('https://bonbang.github.io/store3/cyber-cars-punk-racing/')" },
{ title: "Air Hockey Champion Deluxe", onclick: "openMyWindow('https://bonbang.github.io/air-hockey-championship-deluxe/')" },
{ title: "Bike Trials Winter", onclick: "openMyWindow('https://bonbang.github.io/store2/bike-trials-winter-1/')" },
{ title: "Bumber Car Soccer", onclick: "openMyWindow('https://bonbang.github.io/bumper-cars-soccer/')" },
{ title: "City Drive Stunt Car Master", onclick: "openMyWindow('https://bonbang.github.io/city-car-driving-stunt-master/')" },
{ title: "City Driver", onclick: "openMyWindow('https://bonbang.github.io/store2/city-rider/')" },
{ title: "Grind Craft", onclick: "openMyWindow('https://bonbang.github.io/store1/grindcraft/')" },
{ title: "Gravity Soccer", onclick: "openMyWindow('https://bonbang.github.io/store3/gravity-soccer/')" },
{ title: "Gun Mayhem", onclick: "openMyWindow('https://bonbang.github.io/store5/gun-mayhem/')" },
{ title: "Gun Mayhem 2", onclick: "openMyWindow('https://bonbang.github.io/store5/gun-mayhem-2/')" },
{ title: "Gun Mayhem 3", onclick: "openMyWindow('https://bonbang.github.io/store5/gun-mayhem-3/')" },
{ title: "Gun Spin", onclick: "openMyWindow('https://bonbang.github.io/store5/gunspin/')" },
{ title: "G switch 3", onclick: "openMyWindow('https://h5cdn.github.io/s4/g-switch-3/')" },
{ title: "Stick Climb 2", onclick: "openMyWindow('https://h5cdn.github.io/s6/stickman-climb-2/#abc')" },
{ title: "High Way Traffic", onclick: "openMyWindow('https://h5cdn.github.io/s7/highway-traffic/')" },
{ title: "Murder", onclick: "openMyWindow('https://h5cdn.github.io/s5/murder/')" },
{ title: "We Become What We Behold", onclick: "openMyWindow('https://h5cdn.github.io/s3/we-become-what-we-behold/')" },
{ title: "Stick Man Bike", onclick: "openMyWindow('https://h5cdn.github.io/s6/stickman-bike/')" },
{ title: "Dread Head Parkour", onclick: "openMyWindow('https://h5cdn.github.io/s7/dreadhead-parkour/')" },
{ title: "Idle Digging Tycoon", onclick: "openMyWindow('https://h5cdn.github.io/s5/idle-digging-tycoon/')" },
{ title: "Run 3 Remake", onclick: "openMyWindow('https://h5cdn.github.io/s9/run-3-editor/')" },
{ title: "Brain Test", onclick: "openMyWindow('https://h5cdn.github.io/s2/brain-test-tricky-puzzles/')" },
{ title: "Tiger Simulator", onclick: "openMyWindow('https://h5cdn.github.io/s3/tiger-simulator-3d/')" },
{ title: "Stcik Man Hook", onclick: "openMyWindow('https://h5cdn.github.io/s/stickman-hook/')" },
{ title: "Offroader 5V", onclick: "openMyWindow('https://h5cdn.github.io/s5/offroader-v5/')" },
{ title: "Raft Wars", onclick: "openMyWindow('https://h5cdn.github.io/s/raft-wars/')" },
{ title: "Cluster Rush", onclick: "openMyWindow('https://h5cdn.github.io/s8/cluster-rush/')" },
{ title: "Idle Startup Tycoon", onclick: "openMyWindow('https://h5cdn.github.io/s5/idle-startup-tycoon/')" },
{ title: "Color Water Sort", onclick: "openMyWindow('https://h5cdn.github.io/s3/water-color-sort/')" },
{ title: "Fancy Pants 2", onclick: "openMyWindow('https://h5cdn.github.io/s4/fancy-pants-2/')" },
{ title: "Fancy Pants 3", onclick: "openMyWindow('https://h5cdn.github.io/s4/fancy-pants-3/')" },








    
    
    
    
    



    

    // Add more game objects...
];
// Sample array of game objects (replace this with your actual game data)

let recentSearches = [];

// Function to perform the game search
function searchGame() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchTerm !== '') {
        const foundGame = games.find(game => game.title.toLowerCase().includes(searchTerm));

        if (foundGame) {
            window.location.href = foundGame.url;
            // Add the search term to recent searches if a game is found
            addToRecentSearches(searchTerm);
        } else {
            alert('Game not found. Please try another search term.');
        }
    }
}

// Function to add search term to recent searches
function addToRecentSearches(term) {
    if (!recentSearches.includes(term)) {
        recentSearches.unshift(term); // Add to the beginning of the array
        if (recentSearches.length > 5) {
            recentSearches.pop(); // Remove the oldest search term if the array length exceeds 5
        }
        displayRecentSearches();
    }
}

// Function to display recent searches
function displayRecentSearches() {
    const recentList = document.getElementById('recentList');
    recentList.innerHTML = ''; // Clear previous list items

    recentSearches.forEach(term => {
        const listItem = document.createElement('li');
        listItem.textContent = term;
        recentList.appendChild(listItem);
    });
}
// Event listener for the "Enter" key press in the search input
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchGame();
    }
});
