Platform.getInfo('rod').name = 'Realm of Destiny'

StartupEvents.registry("block", (event) => {
    const custom_machinerys = [
        'rod:paint_generator',
        "rod:random_essence_producer"
    ]

    custom_machinerys.forEach(custom_machinery =>{
        event.create(custom_machinery,"custommachinery").renderType("translucent").displayName(Text.translate(`block.${custom_machinery.replace(':','.')}`))
    })
})