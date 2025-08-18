var $SifterBlockEntity = Java.loadClass("com.oierbravo.createsifter.content.contraptions.components.sifter.SifterBlockEntity")

LevelEvents.tick(event =>{
    const {level} = event
    const tickers = level.blockEntityTickers
    tickers.forEach(/** @param {$TickingBlockEntity_} ticker*/ ticker =>{
        if(ticker.getType() == 'createsifter:sifter'){
            var pos = ticker.getPos()
            /**
             * @type {$SifterBlockEntity_}
             */
            var sifter = level.getBlockEntity(pos)
            var mesh = sifter.meshInv.getStackInSlot(0)
            if(mesh == undefined || mesh == null || mesh == "minecraft:air"){
                return
            }
            var block = level.getBlock(pos)
            var timer = sifter.timer
            var data = block.getEntityData()
            var total_time = 0
            var damageable = mesh.isDamageableItem()
            var chance = 1
            if(data.contains("TotalTime")){
                total_time = data.getInt("TotalTime")
            }
            if(mesh.hasNBT() && mesh.getNbt().contains("Unbreakable")){
                damageable = !mesh.getNbt().getBoolean("Unbreakable")
            }
            if(timer >= total_time && damageable){
                mesh.getAllEnchantments().forEach(
                    /**
                     * 
                     * @param {$Enchantment_} e
                     * @param {integer} i 
                     */
                    function(e,i){
                        if(e.getDescriptionId() == "enchantment.minecraft.unbreaking"){
                            chance = 1 / i
                        }
                        if(e.getDescriptionId() == "enchantment.kubejs.mesh_unbreakable"){
                            damageable = false
                            chance = 0
                        }
                    }
                )
                if(damageable && chance > 0 && Math.random() <= chance){
                    var value = mesh.getDamageValue()
                    var max = mesh.getMaxDamage()
                    if(value + 1 >= max){
                        sifter.meshInv.setStackInSlot(0,"minecraft:air")
                    }else{
                        mesh.setDamageValue(value + 1)
                    }
                }
            }
        }
    })
})