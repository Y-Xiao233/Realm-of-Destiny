JEIEvents.removeCategories(event =>{
    console.log(event.getCategoryIds())
    const categories = [
        "jeresources:dungeon",
        "jeresources:villager",
        "jeresources:worldgen",
        "ae2:certus_growth",
        "create:mystery_conversion",
        "industrialforegoing:ore_sieve",
        "hostilenetworks:loot_fabricator"
    ]

    categories.forEach(category =>{
        event.remove(category)
    })
})