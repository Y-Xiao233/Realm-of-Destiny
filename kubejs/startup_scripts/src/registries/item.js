const $ItemMekanismPaxel = Java.loadClass("mekanism.tools.common.item.ItemMekanismPaxel")

StartupEvents.registry("item",event =>{
    //定义简单物品
    const simple_item = [
        "fluix_shard",
        "certus_quartz_shard",
        "smooth_sky_stone_shard",
        "sapling_certificate",
        "empty_gem",
        "andesite_alloy_sheet",
        "if_addon_base",
        "me_component_package",
        "upgrade_package",
        "module_package",
        "enriched_steel",
        "alloy_covalence",
        "enriched_source",
        "alloy_source",
        "empty_ingot",
        "sfm_package",
        "stage_package",
        "book_of_uncrafting",
        "random_essence",
        "rawtin",
        "rawosmium",
        "time_shard",
        "medium_alloy_covalence",
        "high_alloy_covalence",
        "creative_cell_housing",
        "creative_housing_package"
    ]

    //简单物品统一注册
    simple_item.forEach(item =>{
        event.create(item)
    })

    event.create("colorful_matter_ball").maxStackSize(1).rarity("epic")
    event.create("colorful_matter_ball_six").maxStackSize(1).rarity("epic")
    event.create("colorful_matter_ball_seven").maxStackSize(16).rarity("supreme")
    event.create("mek_upgrade_base").maxStackSize(16)
    event.create("tome1").maxStackSize(1).rarity('epic')
    event.create("tome2").maxStackSize(1).rarity('epic')
    event.create("tome3").maxStackSize(1).rarity("supreme")
    event.create("steel_drill").tag("createoreexcavation:drills")
    event.create("recraft_charm").maxStackSize(8)



    event.create("fluix_mesh","createsifter:mesh").maxDamage(1280).tag('createsifter:meshes')
    event.create("source_mesh","createsifter:mesh").tag('createsifter:meshes').tooltip(Text.translate("tooltip.kubejs.source_mesh0")).glow(true).rarity("epic")
    event.create("infused_mesh","createsifter:mesh").maxDamage(1280).tag('createsifter:meshes')

    const types = [["speed","speed"],["input_chance","input"],["output_chance","output"]]
    types.forEach(([type,id]) =>{
        for(let i = 2; i <= 3; i ++){
            event.create(id + "_augment_" + i,"realmofdestiny:addon_item").setType(type).setStackSize(4 * i).setValue(4 * i).tag('realmofdestiny:pedestal_upgrade_augment')
        }
    })
})