const $CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')

StartupEvents.postInit(event => {
    /**
     * 
     * @param {string} frameBlockId 
     * @param {string} lightItemId 
     * @param {string} dimDestination 
     * @param {string} dimReturn 
     * @param {Object} tintColorObj 
     * @returns 
     */
    function customPortal(frameBlockId, lightItemId, dimDestination, dimReturn, tintColorObj) {
        /**
         * @type {$CustomPortalBuilder_}
         */
        const builder = $CustomPortalBuilder.beginPortal()
        const { R, G, B } = tintColorObj

        builder["frameBlock(net.minecraft.world.level.block.Block)"](frameBlockId).destDimID(dimDestination).returnDim(dimReturn,false).lightWithItem(lightItemId)
            .onlyLightInOverworld()
            .flatPortal()
            .forcedSize(3,3)
            .tintColor(R, G, B)
            .registerPortal()
    }
    
    customPortal('ars_nouveau:magebloom_block','kubejs:alloy_source',"minecraft:the_end","minecraft:overworld",{ R: 255, G: 0, B: 255 })
})