ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ars_nouveau/enchanting_apparatus/'
    const recipes = [
        {
            input:'#minecraft:wool',
            output:'ars_nouveau:magebloom_block',
            pedstalitems:[
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            source_cost:1000,
            id:'magebloom_block'
        },
        {
            input:'industrialforegoing:machine_frame_simple',
            output:'powah:energizing_rod_starter',
            pedstalitems:[
                'minecraft:glowstone',
                'powah:capacitor_basic_tiny',
                'powah:dielectric_rod',
                'powah:capacitor_basic_tiny'
            ],
            source_cost:10000,
            id:"energizing_rod_starter"
        },
        {
            input:'industrialforegoing:machine_frame_simple',
            output:'powah:energizing_orb',
            pedstalitems:[
                '#forge:glass',
                '#forge:glass',
                '#forge:glass',
                'minecraft:glowstone',
                'powah:dielectric_rod_horizontal',
                'powah:dielectric_rod_horizontal',
                'powah:dielectric_rod_horizontal',
                'minecraft:glowstone',
                '#forge:glass',
                '#forge:glass'
            ],
            source_cost:10000,
            id:"energizing_orb"
        },
        {
            input:Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3).weakNBT(),
            output:Item.of('minecraft:enchanted_book').enchant('kubejs:mesh_unbreakable', 1),
            pedstalitems:[
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic',
                'mekanism:alloy_atomic'
            ],
            source_cost:10000,
            id:"enchanted_book/mesh_unbreakable"
        },
        {
            input:Item.of('kubejs:mek_upgrade_base'),
            output:Item.of('mekanism_extras:upgrade_creative'),
            pedstalitems:[
                'mekanism:basic_tier_installer',
                'mekanism:advanced_tier_installer',
                'mekanism:elite_tier_installer',
                'mekanism:ultimate_tier_installer',
                'mekanism_extras:absolute_tier_installer',
                'mekanism_extras:supreme_tier_installer',
                'mekanism_extras:cosmic_tier_installer',
                'mekanism_extras:infinite_tier_installer'
            ],
            source_cost:10000,
            id:"upgrade_creative"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.pedstalitems,recipe.input,recipe.output,recipe.source_cost).id(id_prefix + recipe.id)
    })
})