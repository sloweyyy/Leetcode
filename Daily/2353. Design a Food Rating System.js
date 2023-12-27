/*
 @param{string}name
 @param{string}cuisine
 @param{number}rating
 */
function FoodData(name, cuisine, rating) {
    this.name = name;
    this.cuisine = cuisine;
    this.rating = rating;
}

class FoodRatings {

    constructor(foods, cuisines, ratings) {
        //Map<string, FoodData>
        this.foodNameToFoodData = new Map();
        this.cuisineNameToHeapifiedFoodData = new Map();

        for (let i = 0; i < foods.length; ++i) {
            let currentFood = new FoodData(foods[i], cuisines[i], ratings[i]);
            this.foodNameToFoodData.set(foods[i], currentFood);
            if (!this.cuisineNameToHeapifiedFoodData.has(cuisines[i])) {
                this.cuisineNameToHeapifiedFoodData.set(cuisines[i],
                    new MaxPriorityQueue({ compare: (x, y) => (x.rating === y.rating) ? x.name.localeCompare(y.name) : (y.rating - x.rating) }));
            }
            this.cuisineNameToHeapifiedFoodData.get(cuisines[i]).enqueue(currentFood);
        }
    }

    changeRating(food, newRating) {
        let toUpdate = this.foodNameToFoodData.get(food);
        let updated = new FoodData(toUpdate.name, toUpdate.cuisine, newRating);
        this.foodNameToFoodData.set(food, updated);
        this.cuisineNameToHeapifiedFoodData.get(toUpdate.cuisine).enqueue(updated);
    }

    highestRated(cuisine) {
        let highestRatedFoodForCuisine = "";
        while (true) {
            let food = this.cuisineNameToHeapifiedFoodData.get(cuisine).front();
            if (food.rating !== this.foodNameToFoodData.get(food.name).rating) {
                this.cuisineNameToHeapifiedFoodData.get(cuisine).dequeue();
            } else {
                highestRatedFoodForCuisine = food.name;
                break;
            }
        }
        return highestRatedFoodForCuisine;
    }
}