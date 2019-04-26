const express = require('express');
const router = express.Router();
const stripe = require("stripe")("sk_test_M1KphvJynEbt12mwm5t8sn0z00V2gXC4mY");

router.post("/payment", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: req.body.totalCost * 100,
      currency: "usd",
      description: "An example charge",
      source: req.body.token.id
    });

    res.send(status);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something wrong while buying tickets."
    });
  }
});

module.exports = router;
