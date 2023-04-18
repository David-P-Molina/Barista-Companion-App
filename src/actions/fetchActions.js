import { fetchBrewMethods } from "./BrewActions";
import { fetchCoffeeBeans } from "./CoffeeBeanActions";
import { fetchRecipes } from "./RecipeActions";
import { fetchRoasters } from "./RoasterActions";

export const fetchCalls = () => {
    fetchBrewMethods()
    fetchRoasters()
    fetchCoffeeBeans()
    fetchRecipes()
  }
