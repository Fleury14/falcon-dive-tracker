// does not include zone progression items
// for example dwarf cave require magma/hover
// this is done via a separate check vs zone #

const KIChecks = [
    {
        name: "Mist Cave",
        requirement: [],
        zone: 1
    },
    {
        name: "Damcyan Castle",
        requirement: [],
        zone: 1
    },
    {
        name: "Waterfall",
        requirement: [],
        zone: 1
    },
    {
        name: "Antlion Cave",
        requirement: [],
        zone: 1
    },
    {
        name: "Fabul Defense",
        requirement: [],
        zone: 1
    },
    {
        name: "Mt. Hobs",
        requirement: [],
        zone: 1
    },
    {
        name: "Mt. Ordeals",
        requirement: [],
        zone: 1
    },
    {
        name: "Baron Inn",
        requirement: [],
        zone: 1
    },
    {
        name: "Mist Village",
        requirement: ['bomb-ring'],
        zone: 1
    },
    {
        name: "Kaipo Inn",
        requirement: ['kaipo-pass'],
        zone: 1
    },
    {
        name: "Kaipo Bed",
        requirement: ['sand-ruby'],
        zone: 1
    },
    {
        name: "Baron Castle (King)",
        requirement: ['baron-key'],
        zone: 1
    },
    {
        name: "Baron Castle (Odin)",
        requirement: ['baron-key'],
        zone: 1
    },
    {
        name: "Cave Magnes",
        requirement: ['twin-harp'],
        zone: 1
    },
    {
        name: "Tower of Zot",
        requirement: ['earth-crystal'],
        zone: 1
    },
    {
        name: "Adamant Grotto",
        requirement: ['hovercraft', 'rat-tail'],
        zone: 1
    },
    {
        name: "Dwarf Castle",
        requirement: [],
        zone: 2
    },
    {
        name: "Lower Bab-il (Top)",
        requirement: [],
        zone: 2
    },
    {
        name: "Lower Bab-il (Cannon)",
        requirement: ['lugae-key'],
        zone: 2
    },
    {
        name: "Sealed Cave",
        requirement: ['luca-necklace'],
        zone: 2
    },
    {
        name: "Feymarch (Queen)",
        requirement: [],
        zone: 2
    },
    {
        name: "Feymarch (King)",
        requirement: [],
        zone: 2
    },
    {
        name: "Sylph Cave",
        requirement: ['frying-pan'],
        zone: 2
    },
    {
        name: "Cave Bahamut",
        requirement: [],
        zone: 3
    },
    {
        name: "Murasame Altar",
        requirement: [],
        zone: 3
    },
    {
        name: "Crystal Sword Altar",
        requirement: [],
        zone: 3
    },
    {
        name: "White Spear Room",
        requirement: [],
        zone: 3
    },
    {
        name: "Ribbon Room",
        requirement: [],
        zone: 3
    },
    {
        name: "Masamune Altar",
        requirement: [],
        zone: 3
    },
    {
        name: "Giant of Bab-il",
        requirement: [],
        zone: 3
    },
];

export default KIChecks;