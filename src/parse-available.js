const parseAvailable = ({ KI, locations }) => {
    
    //debug
    // console.log('ki in parser', KI);

    // set default
    const available = {
        mistCave: true,
        damcyan: true,
        waterfall: true,
        antlion: true,
        fabulDefense: true,
        hobs: true,
        ordeals: true,
        baronInn: true,
        mistVillage: false,
        kaipoInn: false,
        kaipoBed: false,
        baronCastle: false,
        baronOdin: false,
        magnes: false,
        zot: false,
        adamant: false,
        dwarf: false,
        babilTop: false,
        babilCannon: false,
        sealed: false,
        feymarchQueen: false,
        feymarchKing: false,
        sylph: false,
        bahamut: false,
        murasame: false,
        crystalSword: false,
        whiteSpear: false,
        ribbon: false,
        masamune: false,
        giant: false,
    };

    // establish underground and moon access
    const underGroundAccess = KI.hovercraft || KI.magmaRock;
    const moonAccess = KI.darkCrystal;

    // individual checks
    available.mistVillage = KI.bombRing;
    available.kaipoInn = KI.kaipoPass;
    available.kaipoBed = KI.sandRuby;
    available.baronCastle = KI.baronKey;
    available.baronOdin = KI.baronKey;
    available.magnes = KI.magnes;
    available.zot = KI.earthCrystal;
    available.adamant = KI.hovercraft && KI.ratTail;
    available.babilTop = underGroundAccess;
    available.babilCannon = underGroundAccess && KI.lugaeKey;
    available.dwarf = underGroundAccess;
    available.sealed = underGroundAccess && KI.lucaNecklace;
    available.feymarchQueen = underGroundAccess;
    available.feymarchKing = underGroundAccess;
    available.sylph = underGroundAccess && KI.fryingPan;
    available.bahamut = moonAccess;
    available.murasame = moonAccess;
    available.crystalSword = moonAccess;
    available.whiteSpear = moonAccess;
    available.ribbon = moonAccess;
    available.masamune = moonAccess;
    available.giant = moonAccess;

    return available;
}

export default parseAvailable;