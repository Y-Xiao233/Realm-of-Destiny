const $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting")

const path = "./kubejs/const.json"
const tooltips_jei_information = readConst(path,"tooltips_jei_information")
const jei_information = readConst(path,"jei_information")
const infinity = readConst(path,"infinity")
const packages = readConst(path,"packages")
const decoration = readConst(path,"decoration")

JEIEvents.information(event => {
    tooltips_jei_information.forEach(information => {
        event.addItem(information,getLangKey(information))
    })

    jei_information.forEach(information =>{
        if(information == null) return
        event.addItem(information,getLangKey(information))
    })

    infinity.forEach(information => {
        event.addItem(information,Text.translate("information.rod.infinity"))
    })

    packages.forEach(item =>{
        event.addItem(item,Text.translate("information.rod.package"))
    })

    decoration.forEach(item =>{
        event.addItem(item,Text.translate("information.rod.decoration"))
    })


    event.addFluid("ifeu:liquid_sculk_matter",Text.translate("information.rod.liquid_sculk_matter"))
    event.addItem('ifeu:liquid_sculk_matter_bucket',Text.translate("information.rod.liquid_sculk_matter"))
    event.addItem(/mysticalagriculture:.*_essence/,Text.translate("information.rod.mysticalagriculture.random"))
})

ItemEvents.tooltip(tooltip =>{
    tooltips_jei_information.forEach(item_tooltip =>{
        tooltip.add(item_tooltip,getLangKey(item_tooltip))
    })

    packages.forEach(item =>{
       tooltip.add(item,Text.translate("information.rod.package"))
    })

    decoration.forEach(item =>{
        tooltip.add(item,Text.translate("information.rod.decoration"))
    })

    tooltip.add('ifeu:liquid_sculk_matter_bucket',Text.translate("information.rod.liquid_sculk_matter"))
    tooltip.add(/mysticalagriculture:.*_essence/,Text.translate("information.rod.mysticalagriculture.random"))

    tooltip.addAdvanced("kubejs:colorful_matter_ball",(item, advanced ,tooltips) =>{
        let mode = 0
        let full = false
        if(item.hasNBT()){
            mode = item.getNbt().getInt("mode")
            full = item.getNbt().getBoolean("full")
        }
        tooltips.add(Text.translatable("tooltip.rod.mode",mode == 0 ? Text.translatable("tooltip.rod.mode.use") : Text.translatable("tooltip.rod.mode.absorb")))
        if(full){
            tooltips.add(Text.translatable("tooltip.rod.full"))
        }else{
            tooltips.add(Text.translatable("tooltip.rod.not_full",256))    
        }
        tooltips.add(Text.translatable("tooltip.rod.mode_change"))

        if(TooltipHelper.getKeyType(TooltipHelper.KeyType.SHIFT)){
            let white = 0,black = 0,light_blue = 0,yellow = 0,purple = 0
            if(item.hasNBT()){
                white = item.getNbt().getInt("white")
                black = item.getNbt().getInt("black")
                light_blue = item.getNbt().getInt("light_blue")
                yellow = item.getNbt().getInt("yellow")
                purple = item.getNbt().getInt("purple")
            }
            tooltips.add(Text.translatable("tooltip.rod.white_paint",Math.ceil(white)))
            tooltips.add(Text.translatable("tooltip.rod.black_paint",Math.ceil(black)))
            tooltips.add(Text.translatable("tooltip.rod.light_blue_paint",Math.ceil(light_blue)))
            tooltips.add(Text.translatable("tooltip.rod.yellow_paint",Math.ceil(yellow)))
            tooltips.add(Text.translatable("tooltip.rod.purple_paint",Math.ceil(purple)))
        
        }else{
            tooltips.add(Component.translatable("tooltip.ifeu.held." + TooltipHelper.KeyType.SHIFT.getValue()).withStyle($ChatFormatting.GRAY));
        }
    })

    tooltip.addAdvanced('hostilenetworks:data_model',(item,advanced,tooltips) =>{
        if(item.hasNBT()){
            /**
             * @type {$CompoundTag_}
             */
            let nbt = item.getNbt()
            if(nbt.contains("data_model")){
                /**
                 * @type {$CompoundTag_}
                 */
                let data = nbt.getCompound("data_model")
                if(data !== null && data.getString("id") == "hostilenetworks:wither" && nbt.contains("tip") && nbt.getBoolean("tip")){
                    tooltips.add(Text.translate("tooltip.hostilenetworks.data_model.wither").green())
                    if(tooltip.isCtrl()){
                        tooltips.add(Text.of("----------"))
                        tooltips.add(Text.translate("hostilenetworks.tier.basic").green().append(": 30%"))
                        tooltips.add(Text.translate("hostilenetworks.tier.advanced").blue().append(": 40%"))
                        tooltips.add(Text.translate("hostilenetworks.tier.superior").lightPurple().append(": 20%"))
                        tooltips.add(Text.translate("hostilenetworks.tier.self_aware").gold().append(": 10%"))
                    }else{
                        tooltips.add(Text.translate("tooltip.rod.data_model.held_ctrl"));
                    }
                }
            }
        }
    })


    addTextureTooltip(tooltip,'kubejs:tome1',"tome",(tips,item) =>{
        getTextureContext(tips,'kubejs:me_component_package',"\u0001")
        getTextureContext(tips,'meinfinitycell:infinity_cobblestone_cell','\u1035')
    })

    addTextureTooltip(tooltip,"kubejs:tome2","tome",(tips,item) =>{
        getTextureContext(tips,'kubejs:module_package',"\u0019")
        getTextureContext(tips,'kubejs:upgrade_package',"\u0007")
        getTextureContext(tips,"kubejs:sfm_package","\u1012")
    })

    addTextureTooltip(tooltip,"kubejs:tome3","tome",(tips,item) =>{
        getTextureContext(tips,'kubejs:creative_housing_package',"\u1038")
        getTextureContext(tips,'kubejs:creative_cell_housing',"\u1036")
    })
    

    addTextureTooltip(tooltip,'kubejs:me_component_package',"package",(tips,item) =>{
        getChanceTextureContext(tips,item,Item.of('ae2:cell_component_1k'),"\u0002",0.2,null)
        getChanceTextureContext(tips,item,Item.of('ae2:cell_component_4k'),"\u0003",0.4)
        getChanceTextureContext(tips,item,Item.of('ae2:cell_component_16k'),"\u0004",0.6)
        getChanceTextureContext(tips,item,Item.of('ae2:cell_component_64k'),"\u0005",0.2)
        getChanceTextureContext(tips,item,Item.of('ae2:cell_component_256k'),"\u0006",0.1)
    })


    addTextureTooltip(tooltip,'kubejs:upgrade_package',"package",(tips,item) =>{
        getChanceTextureContext(tips,item,Item.of('modularrouters:speed_upgrade'),"\u0008",0.6)
        getChanceTextureContext(tips,item,Item.of('modularrouters:stack_upgrade'),"\u0009",0.2)
        getChanceTextureContext(tips,item,Item.of('laserio:overclocker_node'),"\u1007",0.2)
        getChanceTextureContext(tips,item,Item.of('laserio:overclocker_card'),"\u1006",0.3)
        getChanceTextureContext(tips,item,Item.of('ifeu:chance_addon_4'),"\u0010",0.1)
        getChanceTextureContext(tips,item,Item.of('ifeu:creative_chance_addon'),"\u1005",0.01)
        getChanceTextureContext(tips,item,Item.of('ifeu:efficiency_addon_3'),"\u0011",0.2)
        getChanceTextureContext(tips,item,Item.of('ifeu:speed_addon_3'),"\u0012",0.2)
        getChanceTextureContext(tips,item,Item.of('ifeu:processing_addon_3'),"\u0013",0.2)
        getChanceTextureContext(tips,item,Item.of('industrialforegoing:processing_addon_1'),"\u0014",0.3)
        getChanceTextureContext(tips,item,Item.of('industrialforegoing:efficiency_addon_1'),"\u0015",0.3)
        getChanceTextureContext(tips,item,Item.of('industrialforegoing:speed_addon_1'),"\u0016",0.3)
        getChanceTextureContext(tips,item,Item.of('industrialforegoing:range_addon7'),"\u0017",0.15)
        getChanceTextureContext(tips,item,Item.of('industrialforegoing:range_addon3'),"\u0018",0.3)
        getChanceTextureContext(tips,item,Item.of('sophisticatedbackpacks:stack_upgrade_tier_2'),"\u1028",0.4)
        getChanceTextureContext(tips,item,Item.of('sophisticatedbackpacks:stack_upgrade_tier_4'),"\u1029",0.2)
        getChanceTextureContext(tips,item,Item.of('sophisticatedbackpacks:stack_upgrade_omega_tier'),"\u1030",0.05)
    })


    addTextureTooltip(tooltip,'kubejs:module_package',"package",(tips,item) =>{
        getChanceTextureContext(tips,item,Item.of('modularrouters:fluid_module'),"\u102a",0.6)
        getChanceTextureContext(tips,item,Item.of('modularrouters:fluid_module_2'),"\u102b",0.4)
        getChanceTextureContext(tips,item,Item.of('modularrouters:puller_module_1'),"\u1001",0.6)
        getChanceTextureContext(tips,item,Item.of('modularrouters:puller_module_2'),"\u102c",0.4)
        getChanceTextureContext(tips,item,Item.of('modularrouters:sender_module_1'),"\u1002",0.6)
        getChanceTextureContext(tips,item,Item.of('modularrouters:sender_module_2'),"\u1003",0.4)
        getChanceTextureContext(tips,item,Item.of('modularrouters:sender_module_3'),"\u1004",0.2)
        getChanceTextureContext(tips,item,Item.of('laserio:card_item'),"\u1031",0.5)
        getChanceTextureContext(tips,item,Item.of('laserio:card_fluid'),"\u1032",0.5)
        getChanceTextureContext(tips,item,Item.of('laserio:card_energy'),"\u1033",0.5)
        getChanceTextureContext(tips,item,Item.of('laserio:card_redstone'),"\u1034",0.5)
    })

    addTextureTooltip(tooltip,"kubejs:sfm_package","package",(tips,item) =>{
        getChanceTextureContext(tips,item,Item.of('sfm:manager'),"\u1011",0.4)
        getChanceTextureContext(tips,item,Item.of('sfm:disk'),"\u1008",0.4)
        getChanceTextureContext(tips,item,Item.of('sfm:cable',8),"\u1009",0.6)
        getChanceTextureContext(tips,item,Item.of('sfm:cable',8),"\u1010",0.6)
    })


    var ids = [
        "549197F2BC85F652",//gold furnace
        "5009DD5783CFA532",//colorful matter ball seven
        "3EC1538A886DC150",//upgrade speed
        "4149A6F02AB881EA",//compacting drawer
        "732A72ACC1094668",//chance addon 2
        "0A6BF89DDC8C8939",//machine smelter
        "05E71FE3D27D51EB",//low covalence dust
        "42641592F0195E20",//glowstone
        "03DA8C4DC2DD7916",//diamond furnace
        "496C75109DE6B49D",//dragon star
        "5128DEC7A4281D04",//hydroponic bed
        "4A8FE9D22F5B564A"//creative chance addon
    ]
    addTextureTooltip(tooltip,"kubejs:stage_package","package",(tips,item) =>{
        var prefix = getTaskPrefixChances(ids,0.005)

        getChanceTextureContext(tips,item,Item.of('ironfurnaces:gold_furnace'),"\u1017",0.17,prefix[0])
        getChanceTextureContext(tips,item,Item.of('kubejs:colorful_matter_ball_seven'),"\u1014",0.1,prefix[1])
        getChanceTextureContext(tips,item,Item.of('mekanism:upgrade_speed',4),"\u1020",0.2,prefix[2])
        getChanceTextureContext(tips,item,Item.of('functionalstorage:compacting_drawer'),"\u1015",0.2,prefix[3])
        getChanceTextureContext(tips,item,Item.of('ifeu:chance_addon_2'),"\u1021",0.08,prefix[4])
        getChanceTextureContext(tips,item,Item.of('thermal:machine_smelter'),"\u1019",0.2,prefix[5])
        getChanceTextureContext(tips,item,Item.of('projecte:low_covalence_dust',16),"\u1022",0.1,prefix[6])
        getChanceTextureContext(tips,item,Item.of('minecraft:glowstone'),"\u1024",0.2,prefix[7])
        getChanceTextureContext(tips,item,Item.of('ironfurnaces:diamond_furnace'),"\u1016",0.2,prefix[8])
        getChanceTextureContext(tips,item,Item.of('ifeu:dragon_star'),"\u1023",0.08,prefix[9])
        getChanceTextureContext(tips,item,Item.of('industrialforegoing:hydroponic_bed'),"\u1018",0.05,prefix[10])
        getChanceTextureContext(tips,item,Item.of('ifeu:creative_chance_addon'),"\u1005",0.03,prefix[11])
        getChanceTextureContext(tips,item,Item.of('kubejs:book_of_uncrafting'),'\u1027',0.03)
        getChanceTextureContext(tips,item,Item.of('meinfinitycell:infinity_cobblestone_cell'),'\u1035',0.2)
        getChanceTextureContext(tips,item,Item.of('thermal:netherite_coin'),'\u1037',0.2)
    })


    addTextureTooltip(tooltip,"kubejs:creative_housing_package","package",(tips,item) =>{
        getChanceTextureContext(tips,item,Item.of("kubejs:creative_cell_housing"),"\u1036",0.01)
    })
})