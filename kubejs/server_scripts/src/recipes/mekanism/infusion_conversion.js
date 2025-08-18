ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/infusion_conversion/'

    const recipes = [
        {
            input:'projecte:low_covalence_dust',
            output:'kubejs:low_covalence_matter',
            amount:200,
            id:"low_covalence_matter"
        },
        {
            input:'ars_nouveau:source_gem',
            output:'kubejs:source_matter',
            amount:10,
            id:"source_matter_1"
        },
        {
            input:'kubejs:enriched_source',
            output:'kubejs:source_matter',
            amount:80,
            id:"source_matter_2"
        },
        {
            input:'projecte:medium_covalence_dust',
            output:'kubejs:medium_covalence_matter',
            amount:80,
            id:"medium_covalence_matter"
        },
        {
            input:'kubejs:high_alloy_covalence',
            output:'kubejs:high_covalence_matter',
            amount:80,
            id:"high_covalence_matter"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mekanism:infusion_conversion",
            "input":{"ingredient":[{"item":recipe.input}]},
            "output":{"amount":recipe.amount,"infuse_type":recipe.output}
        }).id(id_prefix + recipe.id)
    })
})