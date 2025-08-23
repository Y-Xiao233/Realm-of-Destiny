ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/item_application/"

    const recipes = [
        {
            output:'create:creative_crate',
            hand:'mekanism_extras:upgrade_creative',
            block:'createcasing:creative_casing',
            id:"creative_crate"
        },
        {
            output:'createcasing:creative_casing',
            hand:'createcasing:chorium_ingot',
            block:'#mekanismadditions:plastic_blocks',
            id:"creative_casing"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.item_application(recipe.output,[recipe.block,recipe.hand]).id(id_prefix + recipe.id)
    })
})