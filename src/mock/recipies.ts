import { Recipe } from "models";

// const recipies: Recipe[] = [
//   {
//     id: "1",
//     name: "Peanut Butter Chicken Curry ",
//     summary:
//       "Peanut butter lovers, this incredible recipe is definitely one to try. Immediately.",
//     rating: 4,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2020/08/Peanut-Butter-Curry-FEATURE-min_1596795320.jpg",
//     macros: {
//       calories: 430,
//       carbs: 20,
//       fat: 8,
//       protein: 14,
//     },
//     tags: ["chicken", "dinner"],
//     difficulty: "Beginner",
//     timeToCookMinutes:
//   },
//   {
//     id: "2",
//     name: "Spicy chicken with Couscous",
//     summary:
//       "This super-tasy macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, its a simple way to liven up your routine from plain old chicken and rice.",
//     rating: 5,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg",
//     macros: {
//       calories: 630,
//       carbs: 42,
//       fat: 22,
//       protein: 20,
//     },
//     tags: [],
//   },
//   {
//     id: "3",
//     name: "Harissa chicken & tabbouleh",
//     summary:
//       "Liven up your chicken meal prep with this quick harissa chicken and tabbouleh – packed with protein and healthy carbohydrates.",
//     rating: 5,
//     imgSrc:
//       "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/01/22134120/MYP-Vegan-Harssa-Chicken-Meal-Prep-1800x1200-min.jpg",
//     macros: {
//       calories: 290,
//       carbs: 8,
//       fat: 12,
//       protein: 18,
//     },
//     tags: [],
//   },
//   {
//     id: "4",
//     name: "One-tray cashew chicken",
//     summary:
//       "Meal prepping couldn’t be easier when you only need one baking tray to make it. Try this delicious one-tray cashew chicken meal prep recipe for 4 days’ worth of tasty lunches.",
//     rating: 2,
//     imgSrc:
//       "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/01/22131624/Cashew-chicken-1800-12001-min.jpg",
//     macros: {
//       calories: 647,
//       carbs: 13,
//       fat: 13,
//       protein: 9,
//     },
//     tags: [],
//   },
//   {
//     id: "6",
//     name: "Low-Carb Loaf Tin Lasagne",
//     summary:
//       "Craving lasagne, but don’t want to make a whole tray of the stuff? Try loaf tin lasagne. You’ll get 3 easy portions for 3 days’ worth of low-carb, high-protein meal prep.",
//     rating: 3,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2019/06/Loaf-tin-lasagne-1800x1200-minopt_blog_1573554584.jpg",
//     macros: {
//       calories: 189,
//       carbs: 24,
//       fat: 12,
//       protein: 30,
//     },
//     tags: [],
//   },
//   {
//     id: "7",
//     name: "Harissa Chicken & Moroccan Couscous",
//     summary:
//       "Fire up your tastebuds with this spicy, succulent harissa chicken. Paired with aromatic Moroccan-style couscous, it’s a super-satisfying classic to enjoy all year round.",
//     rating: 1,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2019/06/Loaf-tin-lasagne-1800x1200-minopt_blog_1573554584.jpg",
//     macros: {
//       calories: 430,
//       carbs: 20,
//       fat: 8,
//       protein: 14,
//     },
//     tags: [],
//   },
//   {
//     id: "8",
//     name: "Buffalo Chicken Pasta Salad",
//     summary:
//       "This high-protein buffalo chicken pasta salad will change your chicken meal prep game forever. Trust us – buffalo sauce makes everything better.",
//     rating: 4,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2021/03/Buffalo-chicken-1800x1200-minopt_blog_1573554985_1653894195.jpg",
//     macros: {
//       calories: 430,
//       carbs: 20,
//       fat: 8,
//       protein: 14,
//     },
//     tags: [],
//   },
//   {
//     id: "9",
//     name: "30-Minute Chicken Tikka Masala",
//     summary:
//       "Sometimes you just need something quick and easy to rely on, right? This incredible chicken tikka masala is rich, creamy, and delicious – the ideal lunch to look forward to.",
//     rating: 3,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2020/09/chickentikkamealprep-FEATURE_1600761714.jpg",
//     macros: {
//       carbs: 20,
//       fat: 8,
//       protein: 14,
//       calories: 430,
//     },
//     tags: [],
//   },
//   {
//     id: "10",
//     name: "One-Pot Coconut Chicken & Rice Meal Prep",
//     summary:
//       "Rich, creamy & full of flavour — this is chicken and rice meal prep done right. It’s also ideal for making up in a big batch so that you’re sorted for the whole week through.",
//     rating: 4,
//     imgSrc:
//       "https://blogscdn.thehut.net/app/uploads/sites/478/2020/09/chickentikkamealprep-FEATURE_1600761714.jpg",
//     macros: {
//       carbs: 20,
//       fat: 8,
//       protein: 14,
//       calories: 430,
//     },
//     tags: [],
//   },
// ];

// // export default recipies;
