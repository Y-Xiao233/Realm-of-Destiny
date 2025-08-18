ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/crushing/"

    const recipes = [
        {
            output:[Item.of('kubejs:time_shard').withChance(0.011)],
            input:Item.of('tiab:time_in_a_bottle'),
            time:10,
            id:"time_shard"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.crushing(recipe.output,recipe.input,recipe.time).id(id_prefix + recipe.id)
    })
})