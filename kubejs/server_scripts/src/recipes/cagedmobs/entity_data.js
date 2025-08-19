ServerEvents.recipes(event =>{
    /**
     * 
     * @param {$JsonObject$Type} jsonObject 
     * @returns 
     */
    const custom = (jsonObject) => event.custom(jsonObject)
    const id_prefix = 'realm_of_destiny:recipes/cagedmobs/entity_data/'


    custom(
        new CagedMobsEntityData("minecraft:iron_golem","blaze_burner",800)
            .addOutput(cagedmobs_output(0.8,'mekanism:steel_casing',1,1))
            .samplerTier(3)
    ).id(id_prefix + "minecraft/iron_golem")

    custom(
        new CagedMobsEntityData("minecraft:warden","brass_block",800)
            .addOutput(cagedmobs_output(0.6,'minecraft:echo_shard',1,1))
            .samplerTier(3)
    ).id(id_prefix + "minecraft/warden")
})