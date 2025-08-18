ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ae2/charger/'

    const recipes = [
        {
            input:'minecraft:sand',
            output:'minecraft:glass',
            id:'glass'
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"ae2:charger",
            "ingredient":{"item": recipe.input},
            "result":{"item": recipe.output}
        }).id(id_prefix+recipe.id)
    })
})