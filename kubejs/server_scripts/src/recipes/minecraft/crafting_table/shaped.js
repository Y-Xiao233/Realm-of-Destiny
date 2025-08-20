const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")

ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/minecraft/crafting_table/shaped/'

    const recipes = [
      {
        output:'ae2:fluix_pickaxe',
        pattern:['CBC',' A ',' A '],
        key:{
          A: 'kubejs:smooth_sky_stone_shard',
          B: 'kubejs:certus_quartz_shard',
          C: 'kubejs:fluix_shard'
        },
        id:'fluix_pickaxe'
      },
      {
        output:'ae2:certus_quartz_pickaxe',
        pattern:['BCB',' A ',' A '],
        key:{
          A: 'kubejs:smooth_sky_stone_shard',
          B: 'kubejs:certus_quartz_shard',
          C: 'kubejs:fluix_shard'
        },
        id:'certus_quartz_pickaxe'
      },
      {
        output:'realmofdestiny:pedestal',
        pattern:['ABA',' C ','AAA'],
        key:{
          A: 'ae2:sky_stone_block',
          B: 'kubejs:smooth_sky_stone_shard',
          C: 'minecraft:yellow_dye'
        },
        id:'pedestal'
      },
      {
        output:'ae2:sky_stone_block',
        pattern:['AA','AA'],
        key:{
            A: 'kubejs:smooth_sky_stone_shard'
        },
        id:"sky_stone_block"
      },
      {
        output:'ae2:condenser',
        pattern:['AAA','ABA','AAA'],
        key:{
          A: 'ae2:certus_quartz_crystal',
          B: 'ae2:fluix_crystal'
        },
        id:'condenser'
      },
      {
        output:'minecraft:bucket',
        pattern:['   ','ABA',' A '],
        key:{
          A: '#forge:dyes/white',
          B: 'ae2:fluix_crystal'
        },
        id:'bucket'
      },
      {
        output:'ars_nouveau:water_essence',
        pattern:['ACA','CBC','ACA'],
        key:{
          A: 'minecraft:light_blue_dye',
          B: 'ae2:certus_quartz_crystal',
          C: 'minecraft:purple_dye'
        },
        id:'water_essence'
      },
      {
        output:'ifeu:fluid_crafting_table',
        pattern:['AAA','ABA','AAA'],
        key:{
          A: '#forge:glass',
          B: 'ae2:crafting_terminal'
        },
        id:'fluid_crafting_table'
      },
      {
        output:'ae2:charger',
        pattern:['ABA','AC ','ABA'],
        key:{
          A: 'ae2:certus_quartz_crystal',
          B: 'ae2:fluix_crystal',
          C: 'minecraft:gold_nugget'
        },
        id:'charger'
      },
      {
        output:'advanced_ae:throughput_monitor_configurator',
        pattern:['  A',' B ','B  '],
        key:{
          A: 'ars_nouveau:water_essence',
          B: 'kubejs:smooth_sky_stone_shard'
        },
        id:'throughput_monitor_configurator'
      },
      {
        output:'ae2:item_cell_housing',
        pattern:['ABA','BCB','DDD'],
        key:{
          A: '#forge:glass/silica',
          B: 'ae2:certus_quartz_crystal',
          C: 'ae2:black_paint_ball',
          D: '#forge:dyes/white'
        },
        id:'item_cell_housing'
      },
      {
        output:'industrialforegoing:dissolution_chamber',
        pattern:['ABA','CDC','EFE'],
        key:{
          A: 'ae2:fluix_crystal',
          B: 'ae2:item_cell_housing',
          C: 'minecraft:bucket',
          D: 'ae2:condenser',
          E: '#forge:ingots/gold',
          F: '#forge:gears/gold'
        },
        id:"dissolution_chamber"
      },
      {
        output:'actuallyadditions:lava_factory_casing',
        pattern:['ABA','BCB','ABA'],
        key:{
          A: '#forge:gems/black_quartz',
          B: '#forge:rods/wooden',
          C: '#forge:ingots/gold'
        },
        id:"lava_factory_casing"
      },
      {
        output:'rod:paint_generator',
        pattern:['ABA','BCB','ADA'],
        key:{
          A: '#forge:glass',
          B: 'actuallyadditions:basic_coil',
          C: 'actuallyadditions:lava_factory_casing',
          D: 'minecraft:bucket'
        },
        id:"paint_generator"
      },
      {
        output:'actuallyadditions:basic_coil',
        pattern:[' A ','ABA',' A '],
        key:{
          A: 'ae2:purple_paint_ball',
          B: '#forge:gems/black_quartz'
        },
        id:"basic_coil"
      },
      {
        output:'actuallyadditions:iron_casing',
        pattern:['CAC','ABA','CAC'],
        key:{
          A: '#forge:glass',
          B: 'actuallyadditions:lava_factory_casing',
          C: '#forge:ingots/iron'
        },
        id:"iron_casing"
      },
      {
        output:'thermal:machine_press',
        pattern:[' A ','BCB','DED'],
        key:{
          A: 'ae2:condenser',
          B: '#forge:gems/black_quartz',
          C: 'actuallyadditions:iron_casing',
          D: '#forge:gears/iron',
          E:'ae2:item_cell_housing'
        },
        id:"machine_press"
      },
      {
        output:'thermal:press_packing_2x2_die',
        pattern:['ABA','BBB','ABA'],
        key:{
          A: '#forge:ingots/iron',
          B: '#forge:ingots/gold'
        },
        id:"press_packing_2x2_die"
      },
      {
        output:'thermal:press_unpacking_die',
        pattern:['BAB','ABA','BAB'],
        key:{
          A: '#forge:ingots/iron',
          B: '#forge:ingots/gold'
        },
        id:"press_unpacking_die"
      },
      {
        output:'mekanism:basic_fluid_tank',
        pattern:['ABA','BAB','ABA'],
        key:{
          A: 'thermal:gold_plate',
          B: 'thermal:iron_plate'
        },
        id:"basic_fluid_tank"
      },
      {
        output:'kubejs:fluix_mesh',
        pattern:['AAA','ABA','AAA'],
        key:{
          A: 'minecraft:stick',
          B: 'ae2:fluix_block'
        },
        id:"fluix_mesh"
      },
      {
        output:'ars_nouveau:purple_archwood_sapling',
        pattern:[' A ','BCB',' A '],
        key:{
          A: 'ars_nouveau:magebloom_fiber',
          B: 'ars_nouveau:abjuration_essence',
          C: 'minecraft:oak_sapling'
        },
        id:"purple_archwood_sapling"
      },
      {
        output:'minecraft:shears',
        pattern:[' A','A '],
        key:{
          A: 'thermal:iron_plate'
        },
        id:"shears"
      },
      {
        output:'4x ars_nouveau:arcane_pedestal',
        pattern:['ACA','BAB','BAB'],
        key:{
          A: 'ars_nouveau:sourcestone',
          B: 'thermal:gold_plate',
          C: 'ars_nouveau:source_gem_block'
        },
        id:"arcane_pedestal"
      },
      {
        output:'minecraft:hopper',
        pattern:['A A','ABA',' A '],
        key:{
          A: 'thermal:iron_plate',
          B: '#functionalstorage:oak_drawer'
        },
        id:"hopper"
      },
      {
        output:'ironfurnaces:gold_furnace',
        pattern:['BBB','CDC','AAA'],
        key:{
          A: 'minecraft:gold_block',
          B: 'ars_nouveau:air_essence',
          C: 'powah:thermoelectric_plate',
          D: 'ironfurnaces:iron_furnace'
        },
        id:"gold_furnace"
      },
      {
        output:'create:blaze_burner',
        pattern:[' A ','ABA',' A '],
        key:{
          A: 'thermal:iron_plate',
          B: 'powah:thermoelectric_plate'
        },
        id:"blaze_burner"
      },
      {
        output:'create:basin',
        pattern:['   ','A A','AAA'],
        key:{
          A: 'kubejs:andesite_alloy_sheet'
        },
        id:"basin"
      },
      {
        output:'create:whisk',
        pattern:[' A ','BAB','BBB'],
        key:{
          A: 'kubejs:andesite_alloy_sheet',
          B: 'thermal:iron_plate'
        },
        id:"whisk"
      },
      {
        output:'8x ae2:lime_paint_ball',
        pattern:['AAA','ABA','AAA'],
        key:{
          A: 'ae2:matter_ball',
          B: 'minecraft:lime_dye'
        },
        id:"lime_paint_ball"
      },
      {
        output:'8x ae2:red_paint_ball',
        pattern:['AAA','ABA','AAA'],
        key:{
          A: 'ae2:matter_ball',
          B: 'minecraft:red_dye'
        },
        id:"red_paint_ball"
      },
      {
        "output": "createoreexcavation:drill",
        "pattern": [
          " AB",
          "ABA",
          "BA "
        ],
        "key": {
          "A": "create:brass_ingot",
          "B": "minecraft:iron_block"
        },
        "id": "drill"
      },
      {
        "output":'ifeu:precision_crafting_table',
        "pattern":[
          'BAB',
          'CDC',
          'BAB'
        ],
        "key":{
          "A": "powah:thermoelectric_plate",
          "B": "minecraft:crafting_table",
          "C": "mekanism:steel_casing",
          "D": "kubejs:colorful_matter_ball_seven"
        },
        "id":"precision_crafting_table",
        "keep": "D"
      },
      {
        "output": "thermal:press_gear_die",
        "pattern": [
          " A ",
          "ABA",
          " A "
        ],
        "key": {
          "A": "thermal:iron_plate",
          "B": "thermal:gold_gear"
        },
        "id": "press_gear_die"
      },
      {
        "output": "2x minecraft:diorite",
        "pattern": [
          "AB ",
          "BA ",
          "   "
        ],
        "key": {
          "A": "minecraft:cobblestone",
          "B": "minecraft:white_dye"
        },
        "id": "diorite"
      },
      {
        "output": "ironfurnaces:diamond_furnace",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": "minecraft:diamond",
          "B": "minecraft:ender_eye",
          "C": "minecraft:glowstone",
          "D": "ironfurnaces:gold_furnace"
        },
        "id": "diamond_furnace"
      },
      {
        "output": "4x ars_nouveau:relay_warp",
        "pattern": [
          "ABA",
          "BCB",
          "ABA"
        ],
        "key": {
          "A": "minecraft:ender_eye",
          "B": "ars_nouveau:relay",
          "C": "projecte:low_covalence_dust"
        },
        "id": "relay_warp"
      },
      {
        "output": "kubejs:steel_drill",
        "pattern": [
          " AB",
          "ABA",
          "BA "
        ],
        "key": {
          "A": "projecte:low_covalence_dust",
          "B": "mekanism:block_steel"
        },
        "id": "steel_drill"
      },
      {
        "output": "mekanism:ingot_osmium",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": "projecte:low_covalence_dust",
          "B": "kubejs:rawosmium"
        },
        "id": "ingot_osmium"
      },
      {
        "output": "mekanism:atomic_disassembler",
        "pattern": [
          "ABA",
          "ACA",
          " D "
        ],
        "key": {
          "A": 'kubejs:alloy_source',
          "B": "mekanism:energy_tablet",
          "C": "kubejs:alloy_covalence",
          "D": "create:brass_ingot"
        },
        "id": "atomic_disassembler"
      },
      {
        "output": "mekanism:energy_tablet",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": 'kubejs:alloy_source',
          "B": "create:brass_ingot",
          "C": "kubejs:alloy_covalence",
          "D": "powah:thermoelectric_plate"
        },
        "id": "energy_tablet"
      },
      {
        "output": "kubejs:empty_block",
        "pattern": [
          "AAA",
          "AAA",
          "AAA"
        ],
        "key": {
          "A": "kubejs:empty_ingot"
        },
        "id": "empty_block"
      },
      {
        "output": "powah:thermo_generator_starter",
        "pattern": [
          "AAA",
          "BCB",
          "DDD"
        ],
        "key": {
          "A": "powah:dielectric_paste",
          "B": "powah:capacitor_basic_tiny",
          "C": "create:andesite_casing",
          "D": "powah:thermoelectric_plate"
        },
        "id": "thermo_generator_starter"
      },
      {
        "output": Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"},tip:1b}'),
        "pattern": [
          "AAA",
          "BBB",
          " B "
        ],
        "key": {
          "A": "ifeu:dragon_star",
          "B": "minecraft:soul_sand"
        },
        "id": "data_model/wither"
      },
      {
        "output": "minecraft:comparator",
        "pattern": [
          " A ",
          "ABA",
          "CCC"
        ],
        "key": {
          "A": "minecraft:redstone_torch",
          "B": "ars_nouveau:source_gem",
          "C": "minecraft:stone"
        },
        "id": "comparator"
      },
      {
        "output": "ae2:cell_workbench",
        "pattern": [
          "ABA",
          "CDC",
          "CCC"
        ],
        "key": {
          "A": "minecraft:light_blue_dye",
          "B": "ae2:certus_quartz_crystal",
          "C": "minecraft:iron_ingot",
          "D": "ae2:cell_component_1k"
        },
        "id": "cell_workbench"
      },
      {
        "output": "kubejs:infused_mesh",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": "minecraft:stick",
          "B": "mekanism:alloy_infused"
        },
        "id": "infused_mesh"
      },
      {
        "output": '4x kubejs:random_essence',
        "pattern": [
          "ABA",
          "BCB",
          "ABA"
        ],
        "key": {
          A:'kubejs:alloy_source',
          B:'minecraft:netherite_ingot',
          C:'ifeu:creative_chance_addon'
        },
        "id": "random_essence",
        "keep":"C"
      },
      {
        "output": "kubejs:recraft_charm",
        "pattern": [
          "ABA",
          "BCB",
          "ABA"
        ],
        "key": {
          "A": "mekanism:ingot_steel",
          "B": "mekanism:alloy_reinforced",
          "C": "minecraft:crafting_table"
        },
        "id": "recraft_charm"
      },
      {
        "output": "minecraft:scaffolding",
        "pattern": [
          "ABA",
          "A A",
          "A A"
        ],
        "key": {
          "A": "minecraft:bamboo",
          "B": "kubejs:infused_mesh"
        },
        "id": "scaffolding"
      },
      {
        "output": "experienceobelisk:cognitium_bucket",
        "pattern": [
          " A ",
          "ABA",
          " A "
        ],
        "key": {
          "A": "ars_nouveau:greater_experience_gem",
          "B": "minecraft:bucket"
        },
        "id": "cognitium_bucket"
      },
      {
        "output": "4x mekanismgenerators:fission_reactor_casing",
        "pattern": [
          " A ",
          "ABA",
          " A "
        ],
        "key": {
          "A": "thermal:tin_ingot",
          "B": "mekanism:steel_casing"
        },
        "id": "fission_reactor_casing"
      },
      {
        "output": "4x mekanismgenerators:fission_fuel_assembly",
        "pattern": [
          "ABA",
          "ACA",
          "ABA"
        ],
        "key": {
          "A": "mekanism:ingot_steel",
          "B": "mekanism:alloy_atomic",
          "C": "mekanism:basic_chemical_tank"
        },
        "id": "fission_fuel_assembly"
      },
      {
        "output": "4x mekanismgenerators:control_rod_assembly",
        "pattern": [
          "ABA",
          "CAC",
          "CAC"
        ],
        "key": {
          "A": "mekanism:ingot_steel",
          "B": "mekanism:ultimate_control_circuit",
          "C": "create:electron_tube"
        },
        "id": "control_rod_assembly"
      },
      {
        "output": "mekanism:personal_barrel",
        "pattern": [
          "ABA",
          "CDC",
          "AAA"
        ],
        "key": {
          "A": "mekanism:ingot_steel",
          "B": "minecraft:glass",
          "C": "minecraft:oak_log",
          "D": "mekanism:basic_control_circuit"
        },
        "id": "personal_barrel"
      },
      {
        "output": "mekanism:chemical_oxidizer",
        "pattern": [
          "ABA",
          "CDE",
          "ABA"
        ],
        "key": {
          "A": "mekanism:ultimate_control_circuit",
          "B": "kubejs:medium_alloy_covalence",
          "C": "mekanism:personal_barrel",
          "D": "mekanism:dynamic_tank",
          "E": "mekanism:basic_chemical_tank"
        },
        "id": "chemical_oxidizer"
      },
      {
        "output": "powah:blazing_crystal_block",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": "powah:crystal_blazing",
          "B": "minecraft:netherite_block"
        },
        "id": "blazing_crystal_block"
      },
      {
        "output": "mekanism:thermal_evaporation_block",
        "pattern": [
          "ABA",
          "BCB",
          "ABA"
        ],
        "key": {
          "A": "mekanism:ingot_steel",
          "B": "minecraft:copper_ingot",
          "C": "mekanism:pellet_antimatter"
        },
        "id": "thermal_evaporation_block"
      },
      {
        "output": "8x thermal:netherite_coin",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": "thermal:iron_coin",
          "B": "kubejs:high_alloy_covalence"
        },
        "id": "netherite_coin"
      },
      {
        "output": "mekanism_extras:infinite_tier_installer",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": "mekanism_extras:alloy_spectrum",
          "B": "mekanism_extras:infinite_control_circuit",
          "C": 'mysticalagradditions:creative_essence',
          "D": '#minecraft:planks'
        },
        "id": "infinite_tier_installer"
      },
      {
        "output": "ae2:creative_item_cell",
        "pattern": [
          "AAA",
          "ABA",
          "AAA"
        ],
        "key": {
          "A": "create:creative_crate",
          "B": "kubejs:creative_cell_housing"
        },
        "id": "creative_item_cell"
      },
      {
        "output": "arseng:source_cell_housing",
        "pattern": [
          "ABA",
          "BCB",
          "DDD"
        ],
        "key": {
          "A": "minecraft:glass",
          "B": "ars_nouveau:manipulation_essence",
          "C": "ae2:item_cell_housing",
          "D": "ars_nouveau:source_gem"
        },
        "id": "source_cell_housing"
      },
      {
        "output": "createutilities:void_motor",
        "pattern": [
          " A ",
          " B ",
          " C "
        ],
        "key": {
          "A": "create:brass_ingot",
          "B": "createutilities:void_casing",
          "C": "create:shaft"
        },
        "id": "void_motor"
      },
      {
        "output": "ae2:cell_component_1k",
        "pattern": [
          "ABA",
          "BCB",
          "DDD"
        ],
        "key": {
          "A": "minecraft:glass",
          "B": "ae2:fluix_crystal",
          "C": "minecraft:white_dye",
          "D": "ae2:certus_quartz_crystal"
        },
        "id": "cell_component_1k"
      },
      {
        "output": "ae2:cell_component_4k",
        "pattern": [
          "ABA",
          "BAB",
          "ABA"
        ],
        "key": {
          "A": "ae2:certus_quartz_crystal",
          "B": "ae2:cell_component_1k"
        },
        "id": "cell_component_4k"
      },
      {
        "output": "ae2:cell_component_16k",
        "pattern": [
          "ABA",
          "BAB",
          "ABA"
        ],
        "key": {
          "A": "ae2:certus_quartz_crystal",
          "B": "ae2:cell_component_4k"
        },
        "id": "cell_component_16k"
      },
      {
        "output": "ae2:cell_component_64k",
        "pattern": [
          "ABA",
          "BAB",
          "ABA"
        ],
        "key": {
          "A": "ae2:quartz_block",
          "B": "ae2:cell_component_16k"
        },
        "id": "cell_component_64k"
      },
      {
        "output": "ae2:cell_component_256k",
        "pattern": [
          "ABA",
          "BAB",
          "ABA"
        ],
        "key": {
          "A": "ae2:quartz_block",
          "B": "ae2:cell_component_64k"
        },
        "id": "cell_component_256k"
      },
      {
        "output": "powah:thermo_generator_basic",
        "pattern": [
          "ABA",
          "CDC",
          "EFE"
        ],
        "key": {
          "A": "powah:dielectric_paste",
          "B": "minecraft:iron_ingot",
          "C": "powah:capacitor_basic",
          "D": "minecraft:crying_obsidian",
          "E": "powah:thermoelectric_plate",
          "F": "powah:thermo_generator_starter"
        },
        "id": "thermo_generator_basic"
      },
      {
        "output": "powah:energizing_rod_basic",
        "pattern": [
          " A ",
          "BCB",
          " D "
        ],
        "key": {
          "A": "mekanism:block_osmium",
          "B": "powah:capacitor_basic",
          "C": "powah:dielectric_casing",
          "D": "powah:energizing_rod_starter"
        },
        "id": "energizing_rod_basic"
      },
      {
        "output": "powah:energizing_rod_hardened",
        "pattern": [
          " A ",
          "BCB",
          " D "
        ],
        "key": {
          "A": "mekanism:block_osmium",
          "B": "powah:capacitor_hardened",
          "C": "powah:dielectric_casing",
          "D": "powah:energizing_rod_basic"
        },
        "id": "energizing_rod_hardened"
      },
      {
        "output": "powah:energizing_rod_niotic",
        "pattern": [
          " A ",
          "BCB",
          " D "
        ],
        "key": {
          "A": "mekanism:block_osmium",
          "B": "powah:capacitor_niotic",
          "C": "powah:dielectric_casing",
          "D": "powah:energizing_rod_hardened"
        },
        "id": "energizing_rod_niotic"
      },
      {
        "output": "powah:energizing_rod_spirited",
        "pattern": [
          " A ",
          "BCB",
          " D "
        ],
        "key": {
          "A": "mekanism:block_osmium",
          "B": "powah:capacitor_spirited",
          "C": "powah:dielectric_casing",
          "D": "powah:energizing_rod_niotic"
        },
        "id": "energizing_rod_spirited"
      },
      {
        "output": "powah:energizing_rod_blazing",
        "pattern": [
          " A ",
          "BCB",
          " D "
        ],
        "key": {
          "A": "mekanism:block_osmium",
          "B": "powah:capacitor_blazing",
          "C": "powah:dielectric_casing",
          "D": "powah:energizing_rod_hardened"
        },
        "id": "energizing_rod_blazing"
      },
      {
        "output": "trashcans:item_trash_can",
        "pattern": [
          "AAA",
          "BCB",
          "BBB"
        ],
        "key": {
          "A": '#forge:stone',
          "B": '#forge:cobblestone',
          "C": "ae2:cell_component_1k"
        },
        "id": "item_trash_can"
      },
      {
        "output": "entangled:block",
        "pattern": [
          "ABA",
          "BCB",
          "ABA"
        ],
        "key": {
          "A": "minecraft:ender_pearl",
          "B": "minecraft:obsidian",
          "C": "ae2:cell_component_4k"
        },
        "id": "block"
      },
      {
        "output": "rod:random_essence_producer",
        "pattern": [
          "ABA",
          "BCB",
          "ABA"
        ],
        "key": {
          "A": "ifeu:dragon_star",
          "B": "powah:dielectric_casing",
          "C": "industrialforegoing:machine_frame_simple"
        },
        "id": "random_essence_producer"
      }
    ]

    essences(essence_inputs,essence_outputs)
    essences_copy(copy)

    /**
     * 
     * @param {string[]} inputs
     * @param {string[]} outputs 
     */
    function essences(inputs, outputs){
      for(let i = 0; i < inputs.length; i ++){
        recipes.push({
          "output": "3x " + outputs[i],
          "pattern": [
            "AAA",
            "A A",
            "AAA"
          ],
          "key": {
            "A": inputs[i]
          },
          "id": "essence/" + outputs[i].substring(outputs[i].indexOf(':') + 1)
        })
      }
    }

    function essences_copy(inputs){
      for(let i = 0; i < inputs.length; i ++){
        recipes.push({
          "output": "64x " + inputs[i],
          "pattern": [
            "AAA",
            "ABA",
            "AAA"
          ],
          "key": {
            "A": 'kubejs:medium_alloy_covalence',
            "B": inputs[i]
          },
          "id": "essence_copy/" + inputs[i].substring(inputs[i].indexOf(':') + 1)
        })
      }
    }


    //统一注册配方
    recipes.forEach(recipe =>{
      if(recipe.keep !== undefined){
        const keep = recipe.key[recipe.keep]
        event.shaped(recipe.output,recipe.pattern,recipe.key).replaceIngredient(keep,keep).id(id_prefix+recipe.id)
      }else{
        event.shaped(recipe.output,recipe.pattern,recipe.key).id(id_prefix+recipe.id)
      }
    })
})



var essence_inputs = [
		"mysticalagriculture:brass_essence",
		"mysticalagriculture:ruby_essence",
		"mysticalagriculture:bronze_essence",
		"mysticalagriculture:zinc_essence",
		"mysticalagriculture:uranium_essence",
		"mysticalagriculture:electrum_essence",
		"mysticalagriculture:nickel_essence",
		"mysticalagriculture:constantan_essence",
		"mysticalagriculture:rubber_essence",
		"mysticalagriculture:lead_essence",
		"mysticalagriculture:silver_essence",
		"mysticalagriculture:sulfur_essence",
		"mysticalagriculture:silicon_essence",
		"mysticalagriculture:signalum_essence",
		"mysticalagriculture:peridot_essence",
		"mysticalagriculture:sapphire_essence",
		"mysticalagriculture:invar_essence",
		"mysticalagriculture:tin_essence",
		"mysticalagriculture:steel_essence",
		"mysticalagriculture:apatite_essence",
		"mysticalagriculture:enderium_essence",
		"mysticalagriculture:platinum_essence",
		"mysticalagriculture:lumium_essence",
		"mysticalagriculture:saltpeter_essence",
		"mysticalagriculture:aluminum_essence"
]

var essence_outputs = [
    "create:brass_ingot",
    "alltheores:ruby",
    "thermal:bronze_ingot",
    "create:zinc_ingot",
    "mekanism:ingot_uranium",
    "alltheores:electrum_ingot",
    "thermal:nickel_ingot",
    "thermal:constantan_ingot",
		"thermal:rubber",
		"thermal:lead_ingot",
		"thermal:silver_ingot",
		"thermal:sulfur_dust",
    "ae2:silicon",
		"thermal:signalum_ingot",
    "alltheores:peridot",
		"thermal:sapphire",
    "thermal:invar_ingot",
		"thermal:tin_ingot",
		"mekanism:ingot_steel",
		"thermal:apatite",
		"thermal:enderium_ingot",
		"alltheores:platinum_ingot",
		"thermal:lumium_ingot",
		"thermal:niter_dust",
		"alltheores:aluminum_ingot",
]


var copy = [
  'mysticalagriculture:iron_essence',
  'mysticalagriculture:diamond_essence',
  'mysticalagriculture:nature_essence'
]