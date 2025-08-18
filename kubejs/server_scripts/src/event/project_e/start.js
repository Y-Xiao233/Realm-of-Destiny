const $PECapabilities = Java.loadClass("moze_intel.projecte.api.capabilities.PECapabilities");
const $IKnowledgeProvider = Java.loadClass("moze_intel.projecte.api.capabilities.IKnowledgeProvider");
const $NBTManager = Java.loadClass("moze_intel.projecte.emc.nbt.NBTManager");
const $ItemInfo = Java.loadClass("moze_intel.projecte.api.ItemInfo");

PlayerEvents.loggedIn(event => {
    const {player} = event
    if(!player.stages.has('first_loggedIn')) {
        player.stages.add('first_loggedIn')
        clearAllKnowledges(player)
        learnAllItems(player,shop_start)
    }
})