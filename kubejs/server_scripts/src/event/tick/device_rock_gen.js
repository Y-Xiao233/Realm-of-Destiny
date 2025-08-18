var $DeviceRockGenBlockEntity = Java.loadClass("cofh.thermal.core.common.block.entity.device.DeviceRockGenBlockEntity")

LevelEvents.tick(event =>{
    const {level} = event
    const tickers = level.blockEntityTickers
    tickers.forEach(/** @param {$TickingBlockEntity_} ticker*/ ticker =>{
        if(ticker.getType() == "thermal:device_rock_gen"){
            let pos = ticker.getPos()
            let block = level.getBlock(pos)
            let data = block.getEntityData()
            let progress = data["Proc"]
            let isActive = data["Active"]
            let isFull = false
            /**
             * @type {$DeviceRockGenBlockEntity_}
             */
            let entity = level.getBlockEntity(pos)
            let below = entity.getBelow()
            let item = entity.getSlot(0).getItemStack()
            isFull =  item.getCount() >= item.getMaxStackSize()
            
            if(progress <= 1 && isActive && !isFull && below.id !== "minecraft:air"){
                level.server.scheduleInTicks(2,(e) =>{
                    block.down.set("minecraft:air")
                })
            }
        }
    })
})
