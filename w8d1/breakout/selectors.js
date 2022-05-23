// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", quantity: 5 },
  { name: "Cookie", icon: "🍪", quantity: 2 },
  { name: "Tuna", icon: "🎣", quantity: 50 },
  { name: "Pasta", icon: "🍝", quantity: 5 },
  { name: "Potato", icon: "🥔", quantity: 9001 },
];

const jenniferRaid = ["🍪", "🍪"];
const nathanRaid = ["🥔", "🥔", "🥔", "🥔", "🥔"];

const raidReport = (pantryRaidContent) => {
  const listOfItems = [];
  for (const emoji of pantryRaidContent) {
    const { name, icon } = pantry.find((item) => item.icon === emoji);
    listOfItems.push({ name, icon });
  }
  console.log("The content from the pantry that was taken is", listOfItems);
};

raidReport(jenniferRaid);
