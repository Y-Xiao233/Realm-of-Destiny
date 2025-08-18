ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/custom_machinery/paint_generator/'

    event.recipes.custommachinery.custom_machine("rod:paint_generator",100)
        .requireFluidTag("#rod:paint_1",10)
        .produceEnergyPerTick(20)
        .id(id_prefix + "paint_1")
})