// does not include zone progression items
// for example dwarf cave require magma/hover
// this is done via a separate check vs zone #

const KIChecks = [
    {
        name: "Mist Cave",
        slug: "mistCave",
        requirement: [],
        zone: 1
    },
    {
        name: "Damcyan Castle",
        slug: "damcyan",
        requirement: [],
        zone: 1
    },
    {
        name: "Waterfall",
        slug: "waterfall",
        requirement: [],
        zone: 1
    },
    {
        name: "Antlion Cave",
        slug: "antlion",
        requirement: [],
        zone: 1
    },
    {
        name: "Fabul Defense",
        slug: "fabulDefense",
        requirement: [],
        zone: 1
    },
    {
        name: "Mt. Hobs",
        slug: "hobs",
        requirement: [],
        zone: 1
    },
    {
        name: "Mt. Ordeals",
        slug: "ordeals",
        requirement: [],
        zone: 1
    },
    {
        name: "Baron Inn",
        slug: "baronInn",
        requirement: [],
        zone: 1
    },
    {
        name: "Mist Village",
        slug: "mistVillage",
        requirement: ['bomb-ring'],
        zone: 1
    },
    {
        name: "Kaipo Inn",
        slug: "kaipoInn",
        requirement: ['kaipo-pass'],
        zone: 1
    },
    {
        name: "Kaipo Bed",
        slug: "kaipoBed",
        requirement: ['sand-ruby'],
        zone: 1
    },
    {
        name: "Baron Castle (King)",
        slug: "baronCastle",
        requirement: ['baron-key'],
        zone: 1
    },
    {
        name: "Baron Castle (Odin)",
        slug: "baronOdin",
        requirement: ['baron-key'],
        zone: 1
    },
    {
        name: "Cave Magnes",
        slug: "magnes",
        requirement: ['twin-harp'],
        zone: 1
    },
    {
        name: "Tower of Zot",
        slug: "zot",
        requirement: ['earth-crystal'],
        zone: 1
    },
    {
        name: "Adamant Grotto",
        slug: "adamant",
        requirement: ['hovercraft', 'rat-tail'],
        zone: 1
    },
    {
        name: "Dwarf Castle",
        slug: "dwarf",
        requirement: [],
        zone: 2
    },
    {
        name: "Lower Bab-il (Top)",
        slug: "babilTop",
        requirement: [],
        zone: 2
    },
    {
        name: "Lower Bab-il (Cannon)",
        slug: "babilCannon",
        requirement: ['lugae-key'],
        zone: 2
    },
    {
        name: "Sealed Cave",
        slug: "sealed",
        requirement: ['luca-necklace'],
        zone: 2
    },
    {
        name: "Feymarch (Queen)",
        slug: "feymarchQueen",
        requirement: [],
        zone: 2
    },
    {
        name: "Feymarch (King)",
        slug: "feymarchKing",
        requirement: [],
        zone: 2
    },
    {
        name: "Sylph Cave",
        slug: "sylph",
        requirement: ['frying-pan'],
        zone: 2
    },
    {
        name: "Cave Bahamut",
        slug: "bahamut",
        requirement: [],
        zone: 3
    },
    {
        name: "Murasame Altar",
        slug: "murasame",
        requirement: [],
        zone: 3
    },
    {
        name: "Crystal Sword Altar",
        slug: "crystalSword",
        requirement: [],
        zone: 3
    },
    {
        name: "White Spear Room",
        slug: "whiteSpear",
        requirement: [],
        zone: 3
    },
    {
        name: "Ribbon Room",
        slug: "ribbon",
        requirement: [],
        zone: 3
    },
    {
        name: "Masamune Altar",
        slug: "masamune",
        requirement: [],
        zone: 3
    },
    {
        name: "Giant of Bab-il",
        slug: "giant",
        requirement: [],
        zone: 3
    },
];

export default KIChecks;