var $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks')

BlockEvents.rightClicked('create:blaze_burner', event =>{
    const {hand, item} = event
    if(hand.name() !== "MAIN_HAND") return
    const burn_time = $ForgeHooks.getBurnTime(item,null)
    if(burn_time <= 0) return
    event.cancel()
})