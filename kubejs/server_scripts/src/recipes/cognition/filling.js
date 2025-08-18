ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/cognition/filling/"

    const recipes = [
        {
            output:'anvilcraft:corrupted_beacon',
            input:'minecraft:beacon',
            cost:10000,
            id:"corrupted_beacon"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "experienceobelisk:filling",
            "ingredient": {"item":recipe.input},
            "result": {"item":recipe.output},
            "cost_mB": 10000,
            "id": id_prefix + recipe.id
        }).id(id_prefix + recipe.id)
    })
})