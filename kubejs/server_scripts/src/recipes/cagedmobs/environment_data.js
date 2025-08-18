ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/cagedmobs/environment_data/'
    /**
     * 
     * @param {$JsonObject$Type} jsonObject 
     * @returns 
     */
    const custom = (jsonObject) => event.custom(jsonObject)
    const blaze_burner = new CagedMobsEnvironmentsData("blaze_burner")
    const brass_block = new CagedMobsEnvironmentsData("brass_block")

    custom(blaze_burner.growModifier(1.15).setInput("create:blaze_burner")).id(id_prefix + "blaze_burner")
    custom(brass_block.growModifier(1.15).setInput('create:brass_block')).id(id_prefix + "brass_block")

})