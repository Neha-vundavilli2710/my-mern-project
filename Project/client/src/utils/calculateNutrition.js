import foodDatabase from "./foodDatabase";

// Splits free-text meal entries like "Oats and eggs" or "Rice, dal, salad"
// into individual food tokens, looks each up in foodDatabase, and sums
// the real nutrition values. Falls back to a modest flat estimate only
// for tokens that don't match anything in the database.
export default function calculateNutrition(mealText) {
  const result = { calories: 0, protein: 0, carbs: 0, fat: 0 };

  if (!mealText || typeof mealText !== "string") {
    return result;
  }

  const tokens = mealText
    .toLowerCase()
    .split(/,|\band\b|&|\+|\bwith\b/)
    .map((t) => t.trim())
    .filter(Boolean);

  tokens.forEach((token) => {
    const matchKey = Object.keys(foodDatabase).find(
      (food) => token.includes(food) || food.includes(token)
    );

    if (matchKey) {
      const food = foodDatabase[matchKey];
      result.calories += food.calories;
      result.protein += food.protein;
      result.carbs += food.carbs;
      result.fat += food.fat;
    } else {
      // Unrecognized food item — use a modest flat estimate rather than
      // ignoring it entirely, since the user did plan to eat something.
      result.calories += 150;
      result.protein += 5;
      result.carbs += 20;
      result.fat += 4;
    }
  });

  return result;
}