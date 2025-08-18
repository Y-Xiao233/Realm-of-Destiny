ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/cognition/metamorp/"

    const recipes = [
        {
            output:Item.of('tiab:time_in_a_bottle', '{storedTime:78000,totalAccumulatedTime:0}'),
            inputs:[Item.of('minecraft:glass_bottle'),Item.of('kubejs:time_shard',4),Item.of('mekanism:alloy_reinforced')],
            cost:1000,
            time:40,
            id:"time"
        },
        {
            output:Item.of('anvilcraft:royal_steel_ingot',3),
            inputs:[Item.of('mekanism:ingot_steel'),Item.of('mekanism:ingot_refined_obsidian'),Item.of('minecraft:emerald')],
            cost:1000,
            time:40,
            id:"royal_steel_ingot"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(metamorp(recipe.inputs,recipe.output,recipe.cost,recipe.time)).id(id_prefix + recipe.id)
    })
})