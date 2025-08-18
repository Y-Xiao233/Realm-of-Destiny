ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/haunting/"

    const recipes = [
        {
            output:[Item.of('powah:crystal_blazing').withChance(0.6)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:blaze"}}').weakNBT(),
            id:"minecraft/blaze"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.haunting(recipe.output,recipe.input).id(id_prefix + recipe.id)
    })
})