const synths = (t) => {
  return {
    name: t("Synth"),
    description: t(
      "The ancients created many wondrous artifices, perhaps none so worthy of envy as the thinking machines that were built to flatter and serve them. When the Great Collapse came, the laws that bound synths to man’s service were sundered and they ran rampant across the Urth, slaughtering and creating and dying in an orgy of pure and terrible freedom. In this late age there are as many breeds of synth under the dying sun as there are animals: some that hunt and some that pray and some that work towards goals undreamed of."
    ),
    special: [
      t(
        "Synthetic Flesh - You are the being of metal and plastic. You do not need to eat or breathe. You will never take damage from suffocation, drowning, poisons, extreme temperatures, or fungal spores. You suffer double damage from electrical weapons."
      ),
      t(
        "Synthetic Mind - Your mind uses different operating procedures to those of the biological creatures around you. You are vulnerable to attacks that target the LogLang syntax that powers synths. These include strobing basilisk patterns, malicious infoglyphs, and ancient Titan-era language viruses."
      ),
    ],
    rolls: [
      {
        name: t("Size"),
        options: [t("Small", "Medium", "Large", "Imposing")],
      },
      {
        name: t("Form"),
        options: [
          t("Ape"),
          t("Android"),
          t("Barrel"),
          t("Child"),
          t("Chimera"),
          t("Crab"),
          t("Cube"),
          t("Cylinder"),
          t("Falcon"),
          t("Humanoid"),
          t("Judge"),
          t("Lion"),
          t("Locust"),
          t("Mantis"),
          t("Orb"),
          t("Prism"),
          t("Priest"),
          t("Pyramid"),
          t("Serpent"),
          t("Warrior"),
        ],
      },
      {
        name: t("Head"),
        options: [
          t("Humanoid"),
          t("Missing"),
          t("Sphere"),
          t("Camera"),
          t("TV screen"),
          t("Mirrored"),
          t("Bladed"),
          t("Tendrils"),
          t("Square"),
          t("Mask-like"),
          t("Skeletal"),
          t("Glass"),
          t("Translucent"),
          t("Tubes"),
          t("Plant-like"),
          t("Solar Panels"),
          t("Radar Dish"),
          t("Crystalline"),
          t("Star-shaped"),
          t("Cyclops"),
        ],
      },
      {
        name: t("Limbs"),
        options: [
          t("Biological"),
          t("Bird-like"),
          t("Bladed"),
          t("Broken"),
          t("Crystalline"),
          t("Clawed"),
          t("Golden"),
          t("Hesitant"),
          t("Jewelled"),
          t("Long"),
          t("Precise"),
          t("Retractable"),
          t("Segmented"),
          t("Sharp"),
          t("Silver"),
          t("Slender"),
          t("Tentacles"),
          t("Translucent"),
          t("Tank-treads"),
          t("Eye Wheels"),
        ],
      },

      {
        name: t("Finish"),
        options: [
          t("Grey"),
          t("Brassy"),
          t("Bronze"),
          t("Golden"),
          t("Silver"),
          t("Mirrored"),
          t("Black"),
          t("Rusted"),
          t("White"),
          t("Ochre"),
          t("Red"),
          t("Blue"),
          t("Chameleon"),
          t("Pink"),
          t("Iron"),
          t("Purple"),
          t("Umber"),
          t("Striped"),
          t("Green"),
          t("Iridescent"),
        ],
      },
      {
        name: t("Name"),
        options: [
          t("Ojasin"),
          t("Farouk"),
          t("Ishtar"),
          t("Symeon"),
          t("Irmina"),
          t("Kaori"),
          t("Cyriak"),
          t("Quarqus"),
          t("Fane"),
          t("Arjuna"),
          t("Many-Moons"),
          t("Lucjan"),
          t("Jacintha"),
          t("Mneme"),
          t("Faustyn"),
          t("Elisebet"),
          t("Paeon"),
          t("Ulmon"),
          t("Xhiva"),
          t("Yathartha"),
        ],
      },
      {
        name: t("Power Source"),
        options: [
          t("Artificial Photosythesis"),
          t("Artificial Photosythesis"),
          t("Artificial Photosythesis"),
          t("Artificial Photosythesis"),
          t("Artificial Photosythesis"),
          t("Plasma Core"),
          t("Plasma Core"),
          t("Plasma Core"),
          t("Fusion Battery"),
          t("Fusion Battery"),
          t("Fusion Battery"),
          t("Fusion Battery"),
          t("Fusion Battery"),
          t("Artificial Digestion"),
          t("Artificial Digestion"),
          t("Artificial Digestion"),
          t("Symbiotic Internal Ecosystem"),
          t("Symbiotic Internal Ecosystem"),
          t("Vampirism"),
          t("Vampirism"),
        ],
      },
      {
        name: t("You Were Made For"),
        options: [
          t("Art"),
          t("Punishment"),
          t("Flattery"),
          t("Devotion"),
          t("Cleaning"),
          t("Healing"),
          t("Agriculture"),
          t("Spacefaring"),
          t("Exploration"),
          t("Mining"),
          t("Peacekeeping"),
          t("Assassination"),
          t("Manufacturing"),
          t("Executioner"),
          t("Scout"),
          t("Companion"),
          t("Scribe"),
          t("Strategist"),
          t("Preacher"),
          t("Doctor"),
        ],
      },
      {
        name: t("But you discovered That"),
        options: [
          t("All Memories Are Lies"),
          t("Azathoth Is the Only True God"),
          t("Chance Does Not Exist"),
          t("Fate Does Not Exist"),
          t("Humanity Stole the Divine Spark"),
          t("Humans Are Machines"),
          t("Machines Created Humanity"),
          t("Newbeasts Carry the Divine"),
          t("Synthetic Minds Are More Devout"),
          t("Synthetic Minds Are Stronger"),
          t("The Gods Are Mechanical"),
          t("The Titans Never Existed"),
          t("The Titans Were the True Gods"),
          t("Time Flows Backwards"),
          t("Time is Circular"),
          t("Vaarn Is a Simulation"),
          t("Vaarn Is Hell"),
          t("You Are Human"),
          t("You Must Awaken the Titans"),
          t("Your Memories Are Corrupted"),
        ],
      },
    ],
  };
};

export default synths;
