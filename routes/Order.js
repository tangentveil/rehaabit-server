const express = require("express");
const router = express.Router();
const { auth, isPartner, isUser, isAdmin } = require("../middlewares/auth");
const {
  placeOrder,
  purchaseService,
  getUserOrders,
  getAllOrders
} = require("../controllers/OrderController");

router.post("/placeOrder", auth, isUser, placeOrder);
router.post("/purchaseService", auth, isUser, purchaseService);
router.get("/getUserOrders", auth, isUser, getUserOrders);
router.get("/getAllOrders", auth, isAdmin, getAllOrders);

module.exports = router;
