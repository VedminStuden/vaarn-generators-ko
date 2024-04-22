import { sourceOfConflict } from "../shared";

const urbanShrines = (t) => {
  return [
    {
      name: t("God Aspect (A)"),
      options: [
        t("Tiger"),
        t("Hippo"),
        t("Warrior"),
        t("Child"),
        t("Bee"),
        t("Locust"),
        t("Shark"),
        t("Cockerel"),
        t("Hawk"),
        t("Owl"),
        t("Mother"),
        t("Blacksmith"),
        t("Scorpion"),
        t("Spider"),
        t("Crone"),
        t("Antelope"),
        t("Jackal"),
        t("Sun"),
        t("Moon"),
        t("Star"),
      ],
    },
    {
      name: t("God Aspect (B)"),
      options: [
        t("Old Man"),
        t("Honey Badger"),
        t("Horse"),
        t("Sandworm"),
        t("Synth"),
        t("Fungus"),
        t("Crystal"),
        t("Crown"),
        t("Ibis"),
        t("Wolf"),
        t("Serpent"),
        t("Egg"),
        t("Fire"),
        t("Wind"),
        t("Storm"),
        t("Sword"),
        t("Hammer"),
        t("Spacefarer"),
        t("Lantern"),
        t("Goat"),
      ],
    },
    {
      name: t("Holy Relic"),
      options: [
        t("Saint’s Finger"),
        t("Preserved Head"),
        t("Golden Cup"),
        t("Ancient Coins"),
        t("Eternal Flame"),
        t("Mysterious Box"),
        t("Sacred Flower"),
        t("Golden Scythe"),
        t("Musical Instrument"),
        t("Manifold Crystal"),
        t("Arcane Machinery"),
        t("Unexploded Bomb"),
        t("Preserved Heart"),
        t("Immortal Animal"),
        t("Sacred Beehive"),
        t("Beautiful Robes"),
        t("Illuminated Texts"),
        t("Carved Figurine"),
        t("Black Throne"),
        t("Intricate Head-crest"),
      ],
    },
    {
      name: t("Domain (A)"),
      options: [
        t("Travel"),
        t("Marriage"),
        t("Destruction"),
        t("Childbirth"),
        t("Mutation"),
        t("Business"),
        t("Order"),
        t("Disorder"),
        t("Music"),
        t("Dance"),
        t("Wine"),
        t("Silence"),
        t("Wind"),
        t("Rain"),
        t("Despair"),
        t("Death"),
        t("Wisdom"),
        t("Men"),
        t("Women"),
        t("Synths"),
      ],
    },
    {
      name: t("Domain (B)"),
      options: [
        t("Mystery"),
        t("Memories"),
        t("War"),
        t("Sun"),
        t("Moon"),
        t("Foreknowledge"),
        t("Fungus"),
        t("Visual Art"),
        t("Poetry"),
        t("Justice"),
        t("Crime"),
        t("Assassins"),
        t("Livestock"),
        t("Weaponry"),
        t("Serpents"),
        t("Oasis"),
        t("Wild Beasts"),
        t("Jealousy"),
        t("Generosity"),
        t("Good Fortune"),
      ],
    },
    {
      name: t("Accepts Sacrifice Of"),
      options: [
        t("Songbirds"),
        t("White Goats"),
        t("Bulls"),
        t("Cows"),
        t("Sheep"),
        t("Black Goats"),
        t("Sandworms"),
        t("Dogs"),
        t("Cockerels"),
        t("Antelope"),
        t("Camels"),
        t("Jackals"),
        t("Tortoises"),
        t("Cats"),
        t("Beetles"),
        t("Memories"),
        t("Scorpions"),
        t("Specific Body Parts"),
        t("Synths"),
        t("Humans"),
      ],
    },
    {
      name: t("NPC A"),
      options: [
        t("The Shrine Keeper"),
        t("The Shrine Keeper’s Adopted Child"),
        t("The Shrine Keeper’s Wayward Child"),
        t("Young Oracle, Who Has Visions"),
        t("Drunken, Lazy Priest"),
        t("The Master of Sacrifices"),
        t("Elderly, Blind Mystic"),
        t("Devout and Fanatical Priest"),
        t("The Keeper of a Sacred Animal"),
        t("Slave, Who Sweeps the Grounds"),
        t("The Shrine Keeper"),
        t("The Shrine Keeper’s Adopted Child"),
        t("The Shrine Keeper’s Wayward Child"),
        t("Young Oracle, Who Has Visions"),
        t("Drunken, Lazy Priest"),
        t("The Master of Sacrifices"),
        t("Elderly, Blind Mystic"),
        t("Devout and Fanatical Priest"),
        t("The Keeper of a Sacred Animal"),
        t("Slave, Who Sweeps the Grounds"),
      ],
    },
    { name: t("Source of Conflict"), options: sourceOfConflict(t) },
    {
      name: t("NPC B"),
      options: [
        t("Widower, Who Often Visits to Worship"),
        t("Dull, Devout Worshipper"),
        t("Ex-Priest, Whose Faith Deserted Them"),
        t("Scion of a Noble House"),
        t("Mystic, Who Performs Intense Physical Feats to Prove Devotion"),
        t("One Time Worshipper, Who Now Professes Another Faith"),
        t("An Exorcist"),
        t("Candlemaker, Who Supplies the Sacred Candles"),
        t("Ancient Oracle, Who No Longer Sees the Path"),
        t("Beggar, Who Visits Once A Day For A Meal"),
        t("Widower, Who Often Visits to Worship"),
        t("Dull, Devout Worshipper"),
        t("Ex-Priest, Whose Faith Deserted Them"),
        t("Scion of a Noble House"),
        t("Mystic, Who Performs Intense Physical Feats to Prove Devotion"),
        t("One Time Worshipper, Who Now Professes Another Faith"),
        t("An Exorcist"),
        t("Candlemaker, Who Supplies the Sacred Candles"),
        t("Ancient Oracle, Who No Longer Sees the Path"),
        t("Beggar, Who Visits Once A Day For A Meal"),
      ],
    },
  ];
};
export default urbanShrines;
