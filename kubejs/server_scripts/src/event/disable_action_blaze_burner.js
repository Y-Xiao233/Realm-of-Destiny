var $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks')

BlockEvents.rightClicked('create:blaze_burner', event =>{
    const {hand, item} = event
    const fluid_tank = /mekanism:.*_fluid_tank/
    if(hand.name() !== "MAIN_HAND") return
    if(fluid_tank.exec(item.id) !== null){
        event.cancel()
    }
    const burn_time = $ForgeHooks.getBurnTime(item,null)
    if(burn_time <= 0) return
    event.cancel()
})