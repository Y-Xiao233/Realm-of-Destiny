ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/splashing/"

    const recipes = [
        {
            output:[Item.of('thermal:blizz_rod').withChance(0.8),Item.of('thermal:blizz_powder').withChance(0.4)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:thermal/blizz"}}').weakNBT(),
            id:"thermal/blizz"
        },
        {
            output:[Item.of('thermal:enderium_ingot').withChance(0.8),Item.of('thermal:enderium_dust').withChance(0.4)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}').weakNBT(),
            id:"minecraft/enderman"
        },
        {
            output:[Item.of('mekanism:ingot_refined_glowstone').withChance(0.8),Item.of('thermal:lumium_dust').withChance(0.4)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:witch"}}').weakNBT(),
            id:"minecraft/witch"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.splashing(recipe.output,recipe.input).id(id_prefix + recipe.id)
    })
})