ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/cognition/filling/"

    const recipes = [
        {
            output:'minecraft:emerald',
            input:'minecraft:emerald',
            count:2,
            cost:10000,
            id:"emerald"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "experienceobelisk:filling",
            "ingredient": {"item":recipe.input},
            "result": {"item":recipe.output,"count":recipe.count},
            "cost_mB": 10000,
            "id": id_prefix + recipe.id
        }).id(id_prefix + recipe.id)
    })
})