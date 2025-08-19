ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/createoreexcavation/'
    const coe_recipe = event.recipes.createoreexcavation

    //mek upgrade base
    coe_recipe.drilling([Item.of('kubejs:mek_upgrade_base').withChance(0.35)],"kubejs:mek_upgrade_base",2000).drill('createoreexcavation:drill').id(id_prefix + "mek_upgrade_base_1")
    coe_recipe.drilling([Item.of('kubejs:mek_upgrade_base').withChance(0.5)],"kubejs:mek_upgrade_base",1500).drill('ifeu:chance_addon_2').id(id_prefix + "mek_upgrade_base_2")

    //if addon base
    coe_recipe.drilling([Item.of('kubejs:if_addon_base').withChance(0.5)],'kubejs:if_addon_base',2500).drill('createoreexcavation:drill').id(id_prefix + "if_addon_base_1")
    coe_recipe.drilling([Item.of('kubejs:if_addon_base').withChance(0.6)],'kubejs:if_addon_base',2000).drill('kubejs:steel_drill').id(id_prefix + "if_addon_base_2")

    //data model
    //tier 6 54 354 1254
    const tiers1 = [54,354,1254]
    const entities1 = [
        "thermal/blizz",
        "witch",
        "enderman",
        "blaze"
    ]
    const items1 = []
    entities1.forEach(entity =>{
        tiers1.forEach(tier =>{
            let chance = (12 * tier) / (tier * tier)
            items1.push(Item.of('hostilenetworks:data_model', `{data_model:{data:${tier},id:"hostilenetworks:${entity}"}}`).withChance(chance))
        })
    })

    coe_recipe.drilling(items1,"kubejs:data_model_1",2500).drill('ifeu:chance_addon_1').id(id_prefix + "data_model_1")

    //machine frame pity
    coe_recipe.drilling([Item.of('industrialforegoing:machine_frame_pity').withChance(0.8),Item.of('industrialforegoing:machine_frame_simple').withChance(0.05)],"kubejs:machine_frame_pity",1000).drill("ifeu:chance_addon_2").id(id_prefix + "machine_frame_pity")

    //advanced ores
    coe_recipe.drilling([Item.of('kubejs:rawosmium').withChance(0.8),Item.of('kubejs:rawtin').withChance(0.8)],"kubejs:advanced_ores",500).drill("kubejs:steel_drill").id(id_prefix + "advanced_ores")
})