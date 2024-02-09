const express = require("express");
const router = express.Router();

// CREATE A NEW ITEM
router.post("/item", (req, res) => {
  // This will pass off a request to OpenAI but for the moment we will return a dummy response.
  // For now just console logging the incoming data to validate all is working.
  console.log(req.body);
  res.json({
    message: "Item Processed Successfully",
    itemData: {
      theme: "Science Fiction",
      name: "Phaser Blaster",
      appearance:
        "In the vast expanse of the galaxy, where the United Federation of Planets seeks to explore new worlds and uphold peace, the phaser blaster stands as a quintessential tool for Starfleet officers. Engineered with advanced energy modulation technology, the phaser blaster offers unparalleled versatility, capable of being set to stun, heat, disrupt, or disintegrate based on the user's needs. Its sleek, handheld design allows for ease of use and quick response during critical missions. Equipped with a variable focus setting, it can emit a narrow beam for precision strikes or a wide arc for multiple targets, ensuring that Starfleet personnel are prepared for any encounter, whether it involves neutralizing a threat or merely disabling a malfunctioning piece of equipment. The integration of safety protocols and authentication systems ensures that the device remains secure and operational only in the hands of authorized users, reflecting Starfleet's commitment to responsible use of power.",
      history:
        "This particular phaser blaster bears a storied history, having once belonged to Captain Elara T'Renn, a figure of renown within the United Federation of Planets for her pivotal role in the resolution of the Cygnus Conflict, a tense standoff at the edge of Federation space that threatened to erupt into full-scale war. Manufactured on the Starfleet armory world of Aldebaran III, this phaser blaster was issued to Captain T'Renn upon her commissioning of the USS Valiant, a state-of-the-art exploration vessel designed for deep-space missions.",
    },
  });
});

module.exports = router;
