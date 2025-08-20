ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/evaporating/'
    const recipes = [
        {
            output:Fluid.of("mekanism:lithium",10),
            input:Fluid.of("minecraft:water",10),
            id:"lithium"
        },
        {
            output:Fluid.of("mekanism:brine",10),
            input:Fluid.of("starbunclemania:source_fluid",10),
            id:"brine"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.evaporating(recipe.input,recipe.output).id(id_prefix + recipe.id)
    })
})