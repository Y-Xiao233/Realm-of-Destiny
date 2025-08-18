ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/recation/'
    const recipes = [
        {
            output:'mysticalagradditions:creative_essence',
            input:'mysticalagradditions:insanium_essence',
            gas:'1000x kubejs:dragon_breath',
            fluid:Fluid.of("mekanism:lithium",1000),
            id:"creative_essence"
        },
        {
            output:'mekanism:hdpe_sheet',
            output_gas:'1000x kubejs:dragon_breath',
            input:'mekanism:hdpe_pellet',
            gas:'1000x mekanism:ethene',
            fluid:Fluid.of("ifeu:dragon_star_essence",1000),
            id:"hdpe_sheet"
        }
    ]

    recipes.forEach(recipe =>{
        if(recipe.output_gas == undefined || recipe.output_gas == null){
            event.recipes.mekanism.reaction(recipe.input,recipe.gas,recipe.fluid,recipe.output).duration(100).energyRequired(1000).id(id_prefix + recipe.id)
        }else{
            event.recipes.mekanism.reaction(recipe.input,recipe.gas,recipe.fluid,recipe.output,recipe.output_gas,100,1000).id(id_prefix + recipe.id)
        }
    })
})