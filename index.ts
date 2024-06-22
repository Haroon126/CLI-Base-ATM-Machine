
import inquirer from "inquirer";
const pinCode: number = 6161;
let initialbalance: number = 20000;
let counter : number = 0;

let atmPin = await inquirer.prompt([
  {
    message: "Please Enter Your Pincode",
    type: "number",
    name: "atmPin",
  },
]);
if (atmPin.atmPin === pinCode) {
  console.log("Welcome To ATM");
  do {
    let userOption = await inquirer.prompt([
      {
        message: "What do you want to do?",
        type: "list",
        name: "userOption",
        choices: ["Withdraw", "Deposit", "Balance check", "Fast Cash", "Exit"],
      },
    ]);
    if (userOption.userOption === "Withdraw") {
      let userAnswer = await inquirer.prompt([
        {
          message: "How much amount do you want to withdraw?",
          type: "number",
          name: "userAnswer",
        },
      ]);
      if (
        userAnswer.userAnswer === initialbalance ||
        userAnswer.userAnswer <= initialbalance
      ) {
        console.log("Transition Sucessful");
        initialbalance -= userAnswer.userAnswer;
        // console.log(initialbalance);
      } else {
        console.log("Insufficient Balance");
      }
    }

    if (userOption.userOption === "Deposit") {
      let userDeposite = await inquirer.prompt([
        {
          message: "How Much Amount Do You Want To Deposite?",
          name: "userDeposite",
          type: "number",
        },
      ]);
      initialbalance += userDeposite.userDeposite;
      // console.log(initialbalance);
      console.log("Amount Sucessfully Deposite");
    }

    if (userOption.userOption === "Balance check") {
      console.log(initialbalance);
      let userAnswer = await inquirer.prompt([
        {
          message: "Do want to withdraw?",
          type: "confirm",
          name: "userAnswer",
        },
      ]);

      if (userAnswer.userAnswer === true) {
        let userAnswer = await inquirer.prompt([
          {
            message: "How much amount do you want to withdraw?",
            type: "number",
            name: "userAnswer",
          },
        ]);
        if (
          userAnswer.userAnswer === initialbalance ||
          userAnswer.userAnswer <= initialbalance
        ) {
          console.log("Transition Sucessful");
          initialbalance -= userAnswer.userAnswer;
          // console.log(initialbalance);
        } else {
          console.log("Insufficient Balance");
        }
      } else {
        console.log("Thanks for Using Our Service");
      }
    }

    if (userOption.userOption === "Fast Cash") {
      let fastCash = await inquirer.prompt([
        {
          message: "Please Select Withdraw Amount",
          name: "fastCash",
          type: "list",
          choices: ["500", "1000", "5000", "10000"],
        },
      ]);

      if (
        fastCash.fastCash === "500" ||
        fastCash.fastCash === "1000" ||
        fastCash.fastCash === "5000" ||
        fastCash.fastCash == "10000"
      ) {
        if (fastCash.fastCash <= initialbalance) {
          initialbalance -= fastCash.fastCash;
          console.log("Transition Successful");
        } else {
          console.log("Insufficient Amount");
        }
      }
    }

    if (userOption.userOption === "Exit") {
      console.log("Thanks For Using Our Service Please Come Back Again");
      counter = 3;
    }
  } while (counter < 2);
} else {
  console.log("Invalid Pin");
}

