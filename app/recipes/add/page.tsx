'use client';

import Nav from "../../components/Nav";
import Image from "next/image";
import { Heart, HandPlatter, AlarmClock, CookingPot, CirclePlus } from "lucide-react";
const TEST_RECIPES =[
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 12,
  "gaps": "no",
  "preparationMinutes": null,
  "cookingMinutes": null,
  "aggregateLikes": 3,
  "healthScore": 6,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 77.21,
  "id": 642583,
  "title": "Farfalle with Peas, Ham and Cream",
  "readyInMinutes": 30,
  "servings": 4,
  "sourceUrl": "http://www.foodista.com/recipe/V7DKVTXY/farfalle-with-peas-ham-and-cream",
  "image": "https://img.spoonacular.com/recipes/642583-312x231.jpg",
  "imageType": "jpg",
  "summary": "The recipe Farfalle with Peas, Ham and Cream can be made <b>in about 30 minutes</b>. This recipe serves 4. One portion of this dish contains around <b>15g of protein</b>, <b>16g of fat</b>, and a total of <b>397 calories</b>. For <b>77 cents per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. 3 people found this recipe to be scrumptious and satisfying. A mixture of salt and pepper, ham, farfalle pasta, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a very reasonably priced main course. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 42%</b>, which is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/farfalle-with-gorgonzola-ham-and-peas-149446\">Farfalle With Gorgonzola, Ham And Peas</a>, <a href=\"https://spoonacular.com/recipes/ham-and-peas-farfalle-in-creamy-lemon-parmesan-sauce-646183\">Ham and Peas Farfalle In Creamy Lemon Parmesan Sauce</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-ham-peas-and-cream-18210\">Pasta With Ham, Peas And Cream</a>.",
  "cuisines": [

  ],
  "dishTypes": [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [

  ],
  "occasions": [

  ],
  "spoonacularScore": 47.8931884765625,
  "spoonacularSourceUrl": "https://spoonacular.com/farfalle-with-peas-ham-and-cream-642583"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 15,
  "gaps": "no",
  "preparationMinutes": 5,
  "cookingMinutes": 30,
  "aggregateLikes": 163,
  "healthScore": 27,
  "creditsText": "pinkwhen.com",
  "sourceName": "pinkwhen.com",
  "pricePerServing": 195.54,
  "id": 715538,
  "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
  "readyInMinutes": 35,
  "servings": 5,
  "sourceUrl": "http://www.pinkwhen.com/make-dinner-tonight/",
  "image": "https://img.spoonacular.com/recipes/715538-312x231.jpg",
  "imageType": "jpg",
  "summary": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta takes roughly <b>35 minutes</b> from beginning to end. This recipe serves 5 and costs $1.96 per serving. This main course has <b>591 calories</b>, <b>45g of protein</b>, and <b>13g of fat</b> per serving. If you have bow tie pasta, parmigiano reggiano, recipe makers chicken bruschetta pasta, and a few other ingredients on hand, you can make it. 163 people have made this recipe and would make it again. It is brought to you by Pink When. Plenty of people really liked this Mediterranean dish. With a spoonacular <b>score of 90%</b>, this dish is outstanding. Similar recipes are <a href=\"https://spoonacular.com/recipes/dinner-tonight-grilled-romesco-style-pork-209128\">Dinner Tonight: Grilled Romesco-Style Pork</a>, <a href=\"https://spoonacular.com/recipes/dinner-tonight-chickpea-bruschetta-31868\">Dinner Tonight: Chickpea Bruschetta</a>, and <a href=\"https://spoonacular.com/recipes/dinner-tonight-shrimp-bruschetta-from-da-zaccaria-209251\">Dinner Tonight: Shrimp Bruschetta from 'da Zaccaria</a>.",
  "cuisines": [
    "Mediterranean",
    "Italian",
    "European"
  ],
  "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [

  ],
  "occasions": [

  ],
  "spoonacularScore": 95.14456939697266,
  "spoonacularSourceUrl": "https://spoonacular.com/what-to-make-for-dinner-tonight-bruschetta-style-pork-pasta-715538"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 17,
  "gaps": "no",
  "preparationMinutes": null,
  "cookingMinutes": null,
  "aggregateLikes": 1,
  "healthScore": 27,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 163.92,
  "id": 650126,
  "title": "Linguine E Americana",
  "readyInMinutes": 45,
  "servings": 4,
  "sourceUrl": "http://www.foodista.com/recipe/HK5RM88Z/linguine-e-americana",
  "image": "https://img.spoonacular.com/recipes/650126-312x231.jpg",
  "imageType": "jpg",
  "summary": "You can never have too many main course recipes, so give Linguine E Americanan a try. For <b>$1.64 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>26g of protein</b>, <b>9g of fat</b>, and a total of <b>606 calories</b>. This recipe serves 4. This recipe from Foodista has 1 fans. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Head to the store and pick up chicken stock, celery, carrots, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 80%</b>, which is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/americana-smoothies-375826\">Americana Smoothies</a>, <a href=\"https://spoonacular.com/recipes/americana-apple-pie-507157\">Americanan Apple Pie</a>, and <a href=\"https://spoonacular.com/recipes/americana-pot-roast-230322\">Americana Pot Roast</a>.",
  "cuisines": [

  ],
  "dishTypes": [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [

  ],
  "occasions": [

  ],
  "spoonacularScore": 0.36823946237564087,
  "spoonacularSourceUrl": "https://spoonacular.com/linguine-e-americana-650126"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 9,
  "gaps": "no",
  "preparationMinutes": null,
  "cookingMinutes": null,
  "aggregateLikes": 22,
  "healthScore": 6,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 228.42,
  "id": 634629,
  "title": "Beef Lo Mein Noodles",
  "readyInMinutes": 45,
  "servings": 4,
  "sourceUrl": "https://www.foodista.com/recipe/8QKG6BC8/beef-lo-mein",
  "image": "https://img.spoonacular.com/recipes/634629-312x231.jpg",
  "imageType": "jpg",
  "summary": "The recipe Beef Lo Mein Noodles can be made <b>in around 45 minutes</b>. This recipe serves 4 and costs $2.28 per serving. One portion of this dish contains around <b>23g of protein</b>, <b>18g of fat</b>, and a total of <b>344 calories</b>. It works well as a reasonably priced main course. This recipe from Foodista requires soba noodles, flank steak, green onions, and garlic. It is a good option if you're following a <b>dairy free</b> diet. 22 people were impressed by this recipe. With a spoonacular <b>score of 67%</b>, this dish is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/beef-lo-mein-noodles-1299671\">Beef Lo Mein Noodles</a>, <a href=\"https://spoonacular.com/recipes/lo-mein-noodles-471994\">Lo Mein Noodles</a>, and <a href=\"https://spoonacular.com/recipes/pork-lo-mein-with-zucchini-noodles-1270489\">Pork Lo Mein with Zucchini Noodles</a>.",
  "cuisines": [

  ],
  "dishTypes": [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [
    "dairy free"
  ],
  "occasions": [

  ],
  "spoonacularScore": 52.576011657714844,
  "spoonacularSourceUrl": "https://spoonacular.com/beef-lo-mein-noodles-634629"
},
{
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": false,
  "veryHealthy": true,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 6,
  "gaps": "no",
  "preparationMinutes": null,
  "cookingMinutes": null,
  "aggregateLikes": 3,
  "healthScore": 100,
  "creditsText": "foodista.com",
  "sourceName": "foodista.com",
  "pricePerServing": 66.19,
  "id": 655575,
  "title": "Penne Pasta with Broccoli and Cheese",
  "readyInMinutes": 45,
  "servings": 4,
  "sourceUrl": "https://www.foodista.com/recipe/SJS46FPS/penne-pasta-with-broccoli-and-cheese",
  "image": "https://img.spoonacular.com/recipes/655575-312x231.jpg",
  "imageType": "jpg",
  "summary": "Penne Pasta with Broccoli and Cheese might be just the main course you are searching for. This recipe serves 4 and costs 66 cents per serving. One portion of this dish contains roughly <b>13g of protein</b>, <b>2g of fat</b>, and a total of <b>269 calories</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Not a lot of people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodista. If you have ground pepper, water, chicken broth, and a few other ingredients on hand, you can make it. With a spoonacular <b>score of 94%</b>, this dish is awesome. Try <a href=\"https://spoonacular.com/recipes/penne-pasta-with-broccoli-and-cheese-1403877\">Penne Pasta with Broccoli and Cheese</a>, <a href=\"https://spoonacular.com/recipes/penne-pasta-with-broccoli-and-cheese-1400035\">Penne Pasta with Broccoli and Cheese</a>, and <a href=\"https://spoonacular.com/recipes/cheesy-broccoli-penne-pasta-547454\">Cheesy Broccoli Penne Pasta</a> for similar recipes.",
  "cuisines": [

  ],
  "dishTypes": [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ],
  "diets": [

  ],
  "occasions": [

  ],
  "spoonacularScore": 96.2825927734375,
  "spoonacularSourceUrl": "https://spoonacular.com/penne-pasta-with-broccoli-and-cheese-655575"
}
]

export default function AddRecipes(){
    let cards = TEST_RECIPES.map((recipe) => {
        return(
          <div className="recipe-card flex flex-col bg-green-300 m-4  w-1/5 h-2/4 rounded overflow-hidden relative">

            <CirclePlus size={48} className="absolute bottom-0 right-0 z-20 bg-green-300 rounded-full hover:text-white" />

            <div className="relative h-1/2">
              <Image
                    loader={() => recipe.image}
                    unoptimized={true}
                    src={recipe.image}
                    fill={true}
                    objectFit="cover"
                    alt={recipe.id.toString()}
                    className=""
                />
            </div>
            <div className="flex flex-col p-5">
              <p><b>{recipe.title}</b></p>
              <div className="h-1/4 absolute bottom-0">
                <p className="flex"><AlarmClock /> &nbsp; {recipe.readyInMinutes ? recipe.readyInMinutes + ' minutes' : 'N/A'} </p>
                <p className="flex"><HandPlatter /> &nbsp; {recipe.servings}</p>
                <p className="flex"><Heart /> &nbsp; {recipe.aggregateLikes}</p>
              </div>
            </div>
          </div>
        )
    })

    return(
        <div>
            <Nav />
            <div className="pt-24">
              <div className="flex w-4/5 mx-auto h-screen flex-wrap">
                {cards}
                {cards}
              </div>
            </div>
        </div>
    );
}