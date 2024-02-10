const express = require("express");
const router = express.Router();

// CREATE A NEW CHARACTER
router.post("/character/ai", (req, res) => {
  // This will pass off a request to OpenAI but for the moment we will return a dummy response.
  // For now just console logging the incoming data to validate all is working.
  console.log(req.body);
  res.json({
    message: "AI Character Processed Successfully",
    characterData: {
      theme: "Cyberpunk",
      name: "Henry Case",
      species: "Human",
      gender: "Male",
      age: "24",
      role: "Hacker",
      appearance:
        "Case is depicted as a slender, pale-skinned individual, reflecting the toll of his rigorous life in the shadowy realms of cyber espionage and his struggles with substance abuse. His appearance is marked by signs of his former lifestyle, including his gaunt features and the physical manifestation of his disconnect from the cyberspace he once navigated with ease. His attire and physical demeanor convey his identity as part of the cyberpunk subculture, characterized by a blend of high-tech expertise and a low-life existence.",
      history:
        "Originally, Case was a skilled hacker, known in the underground world for his ability to penetrate highly secure networks. His career was abruptly halted when he betrayed his employers, leading to a severe punishment that damaged his central nervous system, rendering him unable to access the cyberspace. This event not only deprived him of his professional and existential purpose but also plunged him into a life of desperation and petty crime. Stripped of his abilities and cast out from the digital realm he once dominated, Case's story begins with him at his lowest, haunted by his past successes and current incapacities, until an unexpected opportunity for redemption presents itself, offering a chance to reclaim his lost capabilities.",
    },
  });
});

router.post("/character/manual", (req, res) => {
  // This will pass off a request to OpenAI but for the moment we will return a dummy response.
  // For now just console logging the incoming data to validate all is working.
  console.log(req.body);
  res.json({
    message: "Manual Character Processed Successfully",
    characterData: {
      theme: "Fantasy",
      name: "Caramon",
      species: "Human",
      gender: "Male",
      age: "24",
      role: "Warrior",
      appearance:
        "A mighty warrior dressed in heavy armour and armed with a great sword.",
      history:
        "One of twins, Caramon has long been the caretaker of his weaker brother Rasitlin",
    },
  });
});

module.exports = router;
