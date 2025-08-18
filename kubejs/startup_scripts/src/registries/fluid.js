Platform.getInfo('kubejs').name = 'Realm of Destiny'

StartupEvents.registry("fluid",(event) => {

    const fluids = [
        {
            id:"light_blue_dye",
            color:0x00FFFF
        },
        {
            id:"purple_dye",
            color:0xFF00FF
        },
        {
            id:"black_dye",
            color:0x000000
        },
        {
            id:"yellow_dye",
            color:0xFFFF00
        },
        {
            id:"white_dye",
            color:0xFFFFFF
        },
        {
            id:"energized_fluid",
            color:0xBDB76B
        }
    ]

    fluids.forEach(fluid =>{
        event.create(fluid.id)
        .stillTexture('kubejs:block/liquid_overlayer/still').color(fluid.color)
        .flowingTexture('kubejs:block/liquid_overlayer/flow').color(fluid.color)
        .bucketColor(fluid.color)
    })
})