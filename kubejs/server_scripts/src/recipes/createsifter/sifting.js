ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/createsifter/sifting/'
    const {sifting} = event.recipes.createsifter
    sifting(
        [
            Item.of('ars_nouveau:magebloom_fiber').withChance(0.34),
            Item.of('ars_nouveau:abjuration_essence').withChance(0.34),
            Item.of('ars_nouveau:conjuration_essence').withChance(0.14),
            Item.of('ars_nouveau:air_essence').withChance(0.34),
            Item.of('ars_nouveau:earth_essence').withChance(0.34),
            Item.of('ars_nouveau:manipulation_essence').withChance(0.34),
            Item.of('ars_nouveau:fire_essence',3).withChance(0.74),
            Item.of('ars_nouveau:water_essence').withChance(0.34),
            Item.of('ars_nouveau:magebloom').withChance(0.05)
        ],
        ['ae2:fluix_block','kubejs:fluix_mesh']
    ).id(id_prefix + "fluix")

    sifting(
        [
            Item.of('ars_nouveau:source_jar', '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:10000}}').withChance(0.3),
            Item.of('ars_nouveau:source_jar', '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:7500}}').withChance(0.3),
            Item.of('ars_nouveau:source_jar', '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:5000}}').withChance(0.3),
            Item.of('ars_nouveau:source_jar', '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:2500}}').withChance(0.3),
            Item.of('ars_nouveau:source_jar').withChance(0.7)
        ],
        ['ars_nouveau:source_jar','kubejs:source_mesh']
    ).id(id_prefix + "source")

    sifting(
        [
            Item.of('minecraft:kelp').withChance(0.6),
            Item.of('minecraft:pumpkin_seeds').withChance(0.6),
            Item.of('minecraft:sugar_cane').withChance(0.6)
        ],
        ["minecraft:dirt",'createsifter:string_mesh'],
        100,true
    ).id(id_prefix + 'dirt')

    sifting(
        [
            Item.of('actuallyadditions:diamatine_crystal').withChance(0.6),
            Item.of('mekanism:enriched_diamond').withChance(0.5),
            Item.of('actuallyadditions:diamatine_crystal_block').withChance(0.8)
        ],
        ['actuallyadditions:diamatine_crystal_block','kubejs:infused_mesh'],
    ).id(id_prefix + "diamatine_crystal_block"),


    sifting(
        [
            Item.of('minecraft:quartz',3).withChance(0.8),
            Item.of('minecraft:quartz',2).withChance(0.6),
            Item.of('minecraft:quartz',4).withChance(0.2)
        ],
        ['minecraft:diorite','kubejs:infused_mesh'],
    ).id(id_prefix + "diorite")
})