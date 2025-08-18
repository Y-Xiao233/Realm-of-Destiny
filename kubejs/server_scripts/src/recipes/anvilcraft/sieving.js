ServerEvents.recipes(event =>{
    event.custom(anvil_processing("sieving",
        [Item.of('minecraft:diorite')],
        [Item.of('anvilcraft:quartz_sand').withChance(0.2),Item.of('minecraft:quartz')]
    ))

    event.custom(anvil_processing("sieving",
        [Item.of('anvilcraft:quartz_sand')],
        [Item.of('anvilcraft:quartz_sand').withChance(0.5),Item.of('minecraft:quartz')]
    ))
})