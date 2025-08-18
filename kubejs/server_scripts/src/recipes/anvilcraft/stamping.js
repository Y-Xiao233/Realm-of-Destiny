ServerEvents.recipes(event =>{
    event.custom(anvil_processing("stamping",
        [Item.of('create:polished_rose_quartz'),Item.of('thermal:iron_plate')],
        [Item.of('create:electron_tube')]
    ))
})