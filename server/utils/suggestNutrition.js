const suggestNutrition = ({
  age,
  gender,
  height,
  weight,
  activityLevel,
}) => {
  // BMI
  const bmi = Number((weight / ((height / 100) ** 2)).toFixed(1));

  // BMI Category
  let bmiCategory = "";

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi < 25) {
    bmiCategory = "Normal";
  } else if (bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  // BMR
  let bmr;

  if (gender === "Male") {
    bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      5;
  } else {
    bmr =
      10 * weight +
      6.25 * height -
      5 * age -
      161;
  }

  // Activity Multiplier
  const activityFactors = {
    "Sedentary": 1.2,
    "Lightly Active": 1.375,
    "Moderately Active": 1.55,
    "Very Active": 1.725,
    "Extra Active": 1.9,
  };

  const calories = Math.round(
    bmr * activityFactors[activityLevel]
  );

  // Macronutrients
  const protein = Math.round(weight * 1.5);

  const fats = Math.round((calories * 0.25) / 9);

  const carbs = Math.round(
    (calories - protein * 4 - fats * 9) / 4
  );

  // Water Intake (Litres)
  const waterIntake = Number(
    ((weight * 35) / 1000).toFixed(1)
  );

  // Recommendation
  let recommendation = "";

  if (bmiCategory === "Underweight") {
    recommendation =
      "Increase calorie intake with protein-rich foods and strength training.";
  } else if (bmiCategory === "Normal") {
    recommendation =
      "Maintain your balanced diet and continue regular exercise.";
  } else if (bmiCategory === "Overweight") {
    recommendation =
      "Reduce processed foods, increase vegetables, and exercise regularly.";
  } else {
    recommendation =
      "Consult a nutritionist and focus on gradual weight loss through healthy eating.";
  }

  // Meal Plan
  const mealPlan = [
    {
      meal: "Breakfast",
      food: "Oats, Banana, Milk",
    },
    {
      meal: "Lunch",
      food: "Brown Rice, Dal, Vegetables",
    },
    {
      meal: "Evening Snack",
      food: "Fruits and Nuts",
    },
    {
      meal: "Dinner",
      food: "Paneer/Chicken, Salad",
    },
  ];

  return {
    bmi,
    bmiCategory,
    calories,
    protein,
    carbs,
    fats,
    waterIntake,
    recommendation,
    mealPlan,
  };
};

module.exports = suggestNutrition;