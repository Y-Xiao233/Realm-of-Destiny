ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/enriching/'
    const recipes = [
        {
            output:'6x minecraft:glass',
            input:'minecraft:sandstone',
            id:"glass"
        },
        {
            output:'kubejs:enriched_steel',
            input:'mekanism:steel_casing',
            id:"enriched_steel"
        },
        {
            output:'kubejs:enriched_source',
            input:'ars_nouveau:source_gem',
            id:"enriched_source"
        },
        {
            output:'projecte:medium_covalence_dust',
            input:'kubejs:medium_alloy_covalence',
            id:"medium_covalence_dust"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.enriching(recipe.output,recipe.input).id(id_prefix + recipe.id)
    })
})