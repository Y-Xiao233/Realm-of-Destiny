ServerEvents.recipes(event =>{

    // event.recipes.createoreexcavation.vein(Text.of("test vein"),"minecraft:diamond_block").placement(128,8,64825185)
    /**
    .placement(spacing, separation, salt)
    spacing: 矿脉区块间隔
    separation: 矿脉生成点之间的最小距离(必须小于spacing)
    salt: 理解为矿脉生成的"种子值"(各个salt不能一致)
    */
    const coe_recipe = event.recipes.createoreexcavation

    //mek upgrade base
    coe_recipe.vein(Text.translate("item.kubejs.mek_upgrade_base"),'kubejs:mek_upgrade_base')
        .placement(8,4,63595134)
        .alwaysInfinite()
        .id("kubejs:mek_upgrade_base")

    //data model
    coe_recipe.vein(Text.translate("vein.rod.data_model_1"),'hostilenetworks:blank_data_model')
        .placement(8,4,43612957)
        .alwaysInfinite()
        .id("kubejs:data_model_1")

    //if addon base
    coe_recipe.vein(Text.translate("item.kubejs.if_addon_base"),'kubejs:if_addon_base')
        .placement(8,4,36254921)
        .alwaysInfinite()
        .id("kubejs:if_addon_base")

    //machine frame pity
    coe_recipe.vein(Text.translate("block.industrialforegoing.machine_frame_pity"),"industrialforegoing:machine_frame_pity")
        .placement(8,4,84236951)
        .alwaysInfinite()
        .id("kubejs:machine_frame_pity")

    //advanced ores
    coe_recipe.vein(Text.translate("item.kubejs.steel_drill"),'mekanism:raw_osmium')
        .placement(8,4,36528461)
        .alwaysInfinite()
        .id("kubejs:advanced_ores")
})