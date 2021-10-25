export function displayBrewMethodError(errors) {
  return {type: 'DISPLAY__ERROR', errors}
}
export function displayCoffeeBeanError(errors) {
  return {type: 'DISPLAY_COFFEE_BEAN_ERROR', errors}
}
export function displayRecipeError(errors) {
  return {type: 'DISPLAY_RECIPE_ERROR', errors}
}
export function displayRoasterError(errors) {
  return {type: 'DISPLAY_ROASTER_ERROR', errors}
}
export function clearErrorsAction() {
  return { type: 'CLEAR_ERRORS' }
}