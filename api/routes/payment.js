const express = require('express');
const router = express.Router();
const stripeKey = require('../../config').stripeKey;

const stripe = require("stripe")(stripeKey);

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
