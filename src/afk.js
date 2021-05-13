//login and afk
const bot = require('./info');

bot.once('spawn', async() => {
    await bot.waitForChunksToLoad()
    bot.chat(``)
  
    // let recipe = recipeLookup('piston', '1.16.5')
    // console.log(recipe)
    
    //5  5  5
    //4 265 4
    //4 331 4
    // await craftItem();
  })
