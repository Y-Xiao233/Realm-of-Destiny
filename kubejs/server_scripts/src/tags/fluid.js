ServerEvents.tags("fluid", event =>{
    const dyes_1 = [
        "kubejs:light_blue_dye",
        "kubejs:purple_dye",
        "kubejs:black_dye",
        "kubejs:yellow_dye",
        "kubejs:white_dye"
    ]
    event.add("rod:paint_1",dyes_1)
})