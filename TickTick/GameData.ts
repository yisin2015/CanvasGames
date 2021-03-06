class GameData {
    static directions = {
        "east": 0, "north": 1, "west": 2, "south": 3,
        0: "east", 1: "north", 2: "west", 3: "south"
    };
    static levels = [
        {
            "tip": "Pick up all the waterdrops and reach the exit in time.",
            "tiles": [
                "....................",
                ".................X..",
                "..........##########",
                "....................",
                "WWW....WWWW.........",
                "---....####.........",
                "....................",
                "WWW.................",
                "###.........WWWWW...",
                "............#####...",
                "....WWW.............",
                "....###.............",
                "....................",
                ".1........W.W.W.W.W.",
                "####################"]
        },
        {
            "tip": "Watch out, the ice is slippery!",
            "tiles": [
                "....................",
                ".......W....W.......",
                "***.................",
                "......***..***......",
                "1..................X",
                "****............****",
                "....................",
                "W.W.W..........W.W.W",
                "*****..........*****",
                "....................",
                "W.W.W..........W.W.W",
                "******........******",
                "....................",
                "...W.W........W.W...",
                "...****......****..."]
        },
        {
            "tip": "Avoid the rockets, you can jump through some of the tiles.",
            "tiles": [
                "....................",
                "r...............X...",
                ".----..W.......--..W",
                "....W.--..........##",
                "...--....-----......",
                "r................W.W",
                ".......W....W..#####",
                "....W..######.......",
                "....................",
                "-----..........-----",
                "....................",
                "W.W.............W..R",
                "---............-----",
                ".1...W..W..W..W.W.W.",
                "###..#..#..#..######"]
        },
        {
            "tip": "Red tiles are hot and reduce the time before you explode.",
            "tiles": [
                "........W...W.......",
                ".X....W...W...W....R",
                "####^^^^^^^^^^^^^^..",
                ".......W...W...W....",
                "r....W...W...W...W..",
                "..^^^^^^^^^^^^^^^^##",
                "....W...W...W.......",
                "..W...W...W...W....R",
                "##^^^^^^^^^^^^^^^^..",
                ".......W...W...W....",
                "r....W...W...W...W..",
                "..^^^^^^^^^^^^^^^^##",
                "...W...W...W...W....",
                ".W...W...W...W....1.",
                "####################"]
        },
        {
            "tip": "Do not touch the flames, and watch how they move.",
            "tiles": [
                "....................",
                "....................",
                "..........X.........",
                ".......######.......",
                "..W..............W..",
                "####..W.W.W.W....###",
                ".......W.W.WBW......",
                "......++++++++......",
                "....-...........-...",
                "....................",
                "W..W............W.W.",
                "####............####",
                "....................",
                ".1.........A........",
                "#######..***********"]
        },
        {
            "tip": "Many, many, many, many, many rockets...",
            "tiles": [
                "....................",
                "r..W...........X....",
                "...--..W.......--...",
                "....W.--........W..R",
                "...--..........--...",
                "r..W......W....W....",
                "...--....--....--...",
                "....W...........W...",
                "...--........W.--...",
                "r..W........--.W....",
                "...--..........--...",
                "....W...........W..R",
                "...--..........--...",
                ".1..................",
                "######..####..######"]
        },
        {
            "tip": "Use the turtle to jump higher, but watch out when it sneezes.",
            "tiles": [
                "....................",
                "r..W.W.W.......W.W.W",
                "@@@@@@@@............",
                ".............---....",
                "....................",
                "........---.......X.",
                "................----",
                "........C...........",
                "......-------.......",
                "................W..R",
                "...............++...",
                "W..T..........W.....",
                "+++++.........++....",
                ".1..............W...",
                "#######......@@@@@.."]
        },
        {
            "tip": "When Sparky drops, get out of the way!",
            "tiles": [
                "....................",
                "..........X.........",
                "........-----.......",
                "....................",
                "..C...W.W.W.W.W..C..",
                "..----------------..",
                ".W..................",
                "---.W...........W...",
                "....-...........-...",
                "....................",
                ".S..W.....W......S.W",
                "---.............----",
                "....................",
                ".1.....S.....W......",
                "###...###...###....."]
        },
        {
            "tip": "There are many drops in the ocean...",
            "tiles": [
                "....................",
                "r....W..............",
                "...@@@..............",
                "...S..........WWW..R",
                "...@@.........WWW...",
                "..........1...WWW...",
                "...@@....@@...WWW...",
                "....W.........@@@...",
                "............. WWW..R",
                "...@@.......--WWW...",
                "..............WWW...",
                "r...........--WWW...",
                "..............WWW...",
                ".X..A...T.....WWW...",
                "######..###...@@@..."]
        },
        {
            "tip": "Six levels of hot flames...",
            "tiles": [
                "..........W........R",
                "A...W....###........",
                "+++++++...1.........",
                "r.........W......S.X",
                "C...W.....W......###",
                "+++++++...W.........",
                "..........W........R",
                "..C.W.....W.........",
                "+++++++...W..W....C.",
                "..........W..+++++++",
                "r..CW.....W.........",
                "+++++++...W..W.....C",
                "..........W..+++++++",
                "..........W........R",
                "..@@@@@@@@@@@@@@@@.."]
        }
    ];
}