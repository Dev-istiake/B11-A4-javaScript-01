function cashOut(money) {
   const cashOutAmount = money;
   const cashOutChargePct = 1.75 / 100;

   if (typeof cashOutAmount !== "number" || cashOutAmount < 0) {
      return "Invalid";
   } else {
      const totalCOC = cashOutAmount * cashOutChargePct;
      return totalCOC;
   }
}

function validEmail(email) {
   if (typeof email !== "string") {
      return "Invalid";
   } else if (
      email.indexOf("@") <= 0 ||
      email.indexOf(".") === 0 ||
      email.indexOf("+") === 0 ||
      email.indexOf("-") === 0 ||
      email.indexOf("_") === 0 ||
      email.includes(" ") ||
      !email.endsWith(".com")
   ) {
      return false;
   } else {
      return true;
   }
}

function electionResult(votes) {
   if (!Array.isArray(votes)) {
      return "Invalid";
   }

   let partyM = [];
   let partyB = [];

   for (let vote of votes) {
      if (vote === "mango") {
         partyM.push(vote);
      } else if (vote === "banana") {
         partyB.push(vote);
      }
   }

   if (partyM.length > partyB.length) {
      return "Mango";
   } else if (partyB.length > partyM.length) {
      return "Banana";
   } else {
      return "Draw";
   }
}

function isBestFriend(f1, f2) {
   if (typeof f1 !== "object" || typeof f2 !== "object") {
      return "Invalid";
   } else if (Array.isArray(f1) || Array.isArray(f2)) {
      return "Invalid";
   } else if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
      return true;
   } else {
      return false;
   }
}

function calculateWatchTime(times) {
   let totalTimesS = 0;

   for (let time of times) {
      if (typeof time !== "number") {
         return "Invalid";
      } else {
         totalTimesS = totalTimesS + time;
      }
   }
   let hour = Math.floor(totalTimesS / 3600);
   let minute = Math.floor((totalTimesS - 3600 * hour) / 60);
   let second = totalTimesS - 3600 * hour - minute * 60;

   let watchTime = { hour: hour, minute: minute, second: second };
   return watchTime;
}
