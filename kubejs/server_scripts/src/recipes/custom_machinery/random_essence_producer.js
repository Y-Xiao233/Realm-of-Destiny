ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny/recipes/custom_machinery/random_essence_producer"
    event.recipes.custommachinery.custom_machine("rod:random_essence_producer",2)
        .requireFluid(Fluid.of("starbunclemania:source_fluid",200))
        .requireItem('kubejs:recraft_charm').chance(0.02)
        .requireItemTag('mysticalagriculture:essences',24)
        .produceItem('kubejs:random_essence')
        .id(id_prefix + "recraft")
})