const mycomorph = (t) => {
  return {
    name: t("Mycomorph"),
    description: t(
      "In Vaarn many things have intertwined, and much that was once the province of mankind alone - speech, reason, art, religion - has been granted to other forms of life and they hold themselves as humanity’s equal. In the mycomorph death and life are held in strange balance, for these creatures are formed of cadaverous flesh and voracious fungus, and they name their kind the ‘twice born’. Sculptors of living matter and artisans of decay, they remake human flesh for their own purposes, and there is no shortage of raw material in the blue ruins."
    ),
    special: [
      t(
        "Twice Born - You are formed from fungus and the corpse of a human. You may make INT saves to recall information that your original body knew. This might include information that has otherwise been lost during the Great Collapse."
      ),
      t(
        "Detritivore - You can consume organic matter in any state of decay and gain nourishment from it. You heal double HP from Short Rests if the meal you eat is rotting."
      ),
    ],
    rolls: [
      {
        name: t("Body"),
        options: [
          t("Child-like"),
          t("Child-like"),
          t("Child-like"),
          t("Child-like"),
          t("Child-like"),
          t("Modest"),
          t("Modest"),
          t("Modest"),
          t("Modest"),
          t("Modest"),
          t("Large"),
          t("Large"),
          t("Large"),
          t("Large"),
          t("Large"),
          t("Wizened"),
          t("Wizened"),
          t("Wizened"),
          t("Hulking"),
          t("Hulking"),
        ],
      },
      {
        name: t("Head"),
        options: [
          t("Classic Mushroom"),
          t("Frilled"),
          t("Spotted Sphere "),
          t("Spires"),
          t("Conical"),
          t("Cup-like"),
          t("Skull-like"),
          t("Tendrils "),
          t("Puffball"),
          t("Dandelion Fuzz"),
          t("Mask-like"),
          t("Eye Garden"),
          t("Riddled with Holes"),
          t("Cauliflower"),
          t("Bulbous Growths"),
          t("Veil-like"),
          t("Coral-like"),
          t("Filaments"),
          t("Brain-like"),
          t("Geometric"),
        ],
      },
      {
        name: t("Color"),
        options: [
          t("Milky"),
          t("Cream"),
          t("Ashen"),
          t("Blue"),
          t("Coral"),
          t("Crimson"),
          t("Yellow"),
          t("Orange"),
          t("Black"),
          t("Violet"),
          t("Olive"),
          t("Lime"),
          t("Rust"),
          t("Iron"),
          t("Gold"),
          t("Bronze"),
          t("Indigo"),
          t("Translucent"),
          t("Iridescent"),
          t("Brindled"),
        ],
      },
      {
        name: t("Texture"),
        options: [
          t("Rubbery"),
          t("Warty"),
          t("Slimy"),
          t("Fuzzy"),
          t("Hairy"),
          t("Velvet"),
          t("Soft"),
          t("Tree Bark"),
          t("Leather"),
          t("Jelly"),
          t("Burnt"),
          t("Sponge"),
          t("Veined"),
          t("Downy"),
          t("Dry"),
          t("Damp"),
          t("Pitted"),
          t("Crusty"),
          t("Scaled"),
          t("Clay"),
        ],
      },
      {
        name: t("Name"),
        options: [
          t("Dovenglass"),
          t("Oulbrier"),
          t("Mockbridge"),
          t("Headhill"),
          t("Tirrin"),
          t("Yearns"),
          t("Cerilgreay"),
          t("Rendmoor"),
          t("Eamont"),
          t("Purplebeck"),
          t("Arraby"),
          t("Kabergill"),
          t("Pearthika"),
          t("Devandarsh"),
          t("Coronam"),
          t("Ashwine"),
          t("Ekramavati"),
          t("Whitmon"),
          t("Froswhirl"),
          t("Kirth"),
        ],
      },
      {
        name: t("Demeanor"),
        options: [
          t("Abrasive"),
          t("Arrogant"),
          t("Assertive"),
          t("Charismatic"),
          t("Daring"),
          t("Decadent"),
          t("Eloquent"),
          t("Extravagant"),
          t("Hedonistic"),
          t("Impulsive"),
          t("Irritable"),
          t("Melancholy"),
          t("Paranoid"),
          t("Quiet"),
          t("Religious"),
          t("Romantic"),
          t("Scholarly"),
          t("Stern"),
          t("Vain"),
          t("Volatile"),
        ],
      },
      {
        name: t("Other Quality"),
        options: [
          t("Bio-luminous"),
          t("Poisonous Spores"),
          t("Paralysing Spores"),
          t("Psychedelic Spores"),
          t("Mind-slaving Spores"),
          t("Aphrodisiac Spores"),
          t("Poisonous Flesh"),
          t("Paralysing Flesh"),
          t("Psychedelic Flesh"),
          t("Mind-slaving Flesh"),
          t("Aphrodisiac Flesh"),
          t("Absurdly Flexible"),
          t("Mute But Telepathic"),
          t("Can Clone Self"),
          t("Feed on Toxins"),
          t("Feed on Plastic"),
          t("Feed on Metal"),
          t("Feed on Radiation"),
          t("Acidic Touch"),
          t("Light Enough to Float"),
        ],
      },
      {
        name: t("What corpse were you Born From?"),
        options: [
          t("Soldier"),
          t("Gladiator"),
          t("Orphan"),
          t("Invalid"),
          t("Convict"),
          t("Explorer"),
          t("Bandit"),
          t("Scholar"),
          t("Mystic"),
          t("Priest"),
          t("Nomad"),
          t("Exile"),
          t("King"),
          t("Beggar"),
          t("Courtesan"),
          t("Musician"),
          t("Thief"),
          t("Slave"),
          t("Plague Victim"),
          t("Newborn"),
        ],
      },
    ],
  };
};

export default mycomorph;
