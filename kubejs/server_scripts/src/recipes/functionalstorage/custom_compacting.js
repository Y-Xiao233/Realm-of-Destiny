ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/functionalstorage/custom_compacting/'

    const recipes = [
        // {
        //     higher:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither"}}'),
        //     lower:Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:witch"}}'),
        //     id:"data_compacting"
        // },
        {
            higher:Item.of('mekanism:advanced_tier_installer'),
            lower:Item.of('mekanism:basic_tier_installer',10240000),
            id:"advanced_tier_installer"
        },
        {
            higher:Item.of('mekanism_extras:upgrade_stack'),
            lower:Item.of('mekanism:upgrade_speed',16),
            id:"upgrade_stack"
        },
        {
            higher:Item.of('modularrouters:stack_upgrade'),
            lower:Item.of('modularrouters:speed_upgrade',6),
            id:"stack_upgrade"
        },
        {
            higher:Item.of('mysticalagradditions:insanium_essence'),
            lower:Item.of('mekanism:pellet_antimatter',128),
            id:"insanium_essence"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"functionalstorage:custom_compacting",
            "higher_input":recipe.higher,
            "lower_input":recipe.lower
        }).id(id_prefix + recipe.id)
    })
})