ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/splashing/"

    const recipes = [
        {
            output:[Item.of('thermal:blizz_rod',3).withChance(0.8),Item.of('thermal:blizz_powder',3).withChance(0.4)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:thermal/blizz"}}').weakNBT(),
            id:"thermal/blizz"
        },
        {
            output:[Item.of('thermal:enderium_ingot',3).withChance(0.8),Item.of('thermal:enderium_dust',3).withChance(0.4)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}').weakNBT(),
            id:"minecraft/enderman"
        },
        {
            output:[Item.of('mekanism:ingot_refined_glowstone',3).withChance(0.8),Item.of('thermal:lumium_dust',3).withChance(0.4)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:witch"}}').weakNBT(),
            id:"minecraft/witch"
        },
        {
            output:[Item.of('powah:crystal_blazing',3).withChance(0.6)],
            input:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:blaze"}}').weakNBT(),
            id:"minecraft/blaze"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.splashing(recipe.output,recipe.input).id(id_prefix + recipe.id)
    })
})