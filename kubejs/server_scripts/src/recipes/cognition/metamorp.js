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
            output:Item.of('ars_nouveau:greater_experience_gem',16),
            inputs:[Item.of('minecraft:experience_bottle',2),Item.of('minecraft:glowstone_dust'),Item.of('ae2:matter_ball')],
            cost:96,
            time:40,
            id:"greater_experience_gem"
        },
        {
            output:Item.of('mekanism:ingot_refined_obsidian',3),
            inputs:[Item.of('minecraft:iron_ingot'),Item.of('minecraft:obsidian'),Item.of('mekanism:ingot_refined_glowstone')],
            cost:100,
            time:40,
            id:"ingot_refined_obsidian"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(metamorp(recipe.inputs,recipe.output,recipe.cost,recipe.time)).id(id_prefix + recipe.id)
    })
})