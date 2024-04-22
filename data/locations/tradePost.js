import { sourceOfConflict } from "../shared";

const tradePost = (t) => {
  return [
    {
      name: t("The location is"),
      options: [
        t("a Large Tent"),
        t("a Crossroads"),
        t("Beneath Great Cactus"),
        t("an Echoing Cave"),
        t("Beneath Glowering Idol"),
        t("Sheltered Valley"),
        t("Atop a Great Rock"),
        t("Within a Huge Skull"),
        t("Within a Huge Empty Shell"),
        t("an Ancient Tollbooth"),
        t("a Stone Fort"),
        t("a Grove of Martyr Trees"),
        t("a Dried Up Oasis"),
        t("a Polluted Lakeshore"),
        t("Near a Faa Nomad Camp"),
        t("Near a Hegemony Camp"),
        t("Near a Wreck"),
        t("Near a Holy Place"),
        t("By an Oasis"),
        t("By an Oasis"),
      ],
    },
    {
      name: t(" and is visited by"),
      options: [
        t("Hegemony Soldiers"),
        t("Faa Nomad Raiders"),
        t("Faa Nomad Herdsmen"),
        t("Cacogen Drifters"),
        t("Furtive Monks"),
        t("Cacklemaw Exiles"),
        t("Oracle’s Caretakers"),
        t("Servants of a Petty God"),
        t("Vault Raiders"),
        t("A Science-Mystic"),
        t("Lithling Scholars"),
        t("Gnomonian Merchants"),
        t("Mercenary Band"),
        t("Roaming Scavengers"),
        t("Secretive Hermit"),
        t("Lowly Goatherds"),
        t("Pious Synths"),
        t("Deranged Synths"),
        t("Pack of Newbeasts"),
        t("Titan Cultists"),
      ],
    },
    {
      name: t(" and"),
      options: [
        t("Hegemony Soldiers"),
        t("Faa Nomad Raiders"),
        t("Faa Nomad Herdsmen"),
        t("Cacogen Drifters"),
        t("Furtive Monks"),
        t("Cacklemaw Exiles"),
        t("Oracle’s Caretakers"),
        t("Servants of a Petty God"),
        t("Vault Raiders"),
        t("A Science-Mystic"),
        t("Lithling Scholars"),
        t("Gnomonian Merchants"),
        t("Mercenary Band"),
        t("Roaming Scavengers"),
        t("Secretive Hermit"),
        t("Lowly Goatherds"),
        t("Pious Synths"),
        t("Deranged Synths"),
        t("Pack of Newbeasts"),
        t("Titan Cultists"),
      ],
    },
    {
      name: t(". These groups trade"),
      options: [
        t("Water"),
        t("Information"),
        t("Memories"),
        t("Music"),
        t("Olives"),
        t("Weapons"),
        t("Armour"),
        t("Pottery"),
        t("Jewellery"),
        t("Dried Fish"),
        t("Livestock"),
        t("Prisoners"),
        t("Psychedelics"),
        t("Flowers"),
        t("Synth Parts"),
        t("Camels"),
        t("Books"),
        t("Carpets"),
        t("Medicine"),
        t("Medicine"),
      ],
    },
    {
      name: t(" and"),
      options: [
        t("Water"),
        t("Information"),
        t("Memories"),
        t("Music"),
        t("Olives"),
        t("Weapons"),
        t("Armour"),
        t("Pottery"),
        t("Jewellery"),
        t("Dried Fish"),
        t("Livestock"),
        t("Prisoners"),
        t("Psychedelics"),
        t("Flowers"),
        t("Synth Parts"),
        t("Camels"),
        t("Books"),
        t("Carpets"),
        t("Medicine"),
        t("Medicine"),
      ],
    },
    {
      name: t(". Currently there's a conflict between"),
      options: [
        t("the Owner of the Trade Post"),
        t("the Owner’s Spouse"),
        t("the Owner’s Sibling"),
        t("the Owner’s Heir"),
        t("a Peacekeeper at the Trade Post"),
        t("a Peacekeeper’s Sinister Deputy"),
        t("a Studious Clerk"),
        t("a Dishonest Clerk"),
        t("a Lowly Servant"),
        t("an Orphan, Found in the Desert"),
      ],
    },
    {
      name: t(" and"),
      options: [
        t("a Successful, Pompous Trader"),
        t("a Sly, Scheming Trader"),
        t("a Elderly, Naïve Trader"),
        t("a Young, Cruel Trader"),
        t("a Reckless, Hotheaded Trader"),
        t("a Whining, Annoying Trader"),
        t("a Brawny Youth, who Assists a Trader"),
        t("a Performer, Who Entertains Traders"),
        t("a Fortune-Teller, Just Passing Through"),
        t("a Wandering, Scheming Stranger"),
      ],
    },
    {
      name: t(" and the cause of this is"),
      options: sourceOfConflict(t),
    },
  ];
};
export default tradePost;
