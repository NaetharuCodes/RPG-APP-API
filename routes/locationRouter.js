const express = require("express");
const router = express.Router();

router.post("/location", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Location Processed Successfully",
    locationData: {
      theme: "Fantasy",
      name: "The Red Moon Tavern",
      appearnace: "An old tavern on the waterfront of Rottfurt",
      history:
        "Once a warehouse building used by the dockworkers, the Red Moon opened as a tavern some three decades ago...",
    },
  });
});
module.exports = router;
