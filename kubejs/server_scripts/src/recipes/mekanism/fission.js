ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/mekanism/fission/"

    const recipes = [
        {
            gas:{"gas":"mekanism:fissile_fuel","amount":1},
            output:{"gas":"mekanism:antimatter","amount":1},
            heat:1,
            id:`${id_prefix}antimatter`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "mekanism:fission",
            "input": recipe.gas,
            "output": recipe.output,
            "heat": recipe.heat
        }).id(recipe.id)
    })
})