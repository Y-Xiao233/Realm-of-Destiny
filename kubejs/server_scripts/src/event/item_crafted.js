ItemEvents.crafted(Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"}}').weakNBT(),event =>{
    if(event.item.id !== "hostilenetworks:data_model") return
    const tier = [6, 54, 354, 1254]
    const probabilities = [30, 40, 20, 10]
    event.item.setNbt({data_model:{data:getWeightedRandom(tier,probabilities),id:"hostilenetworks:wither"}})
})