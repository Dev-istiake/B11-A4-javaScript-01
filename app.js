function cashOut(money) {
   const cashOutAmount = money;
   const cashOutCharge = 1.75 / 100;

   if (typeof cashOutAmount !== "number" || cashOutAmount < 0) {
      return "Invalid";
   } else {
      const receivedMoney = cashOutAmount * cashOutCharge;
      return receivedMoney;
   }
}
