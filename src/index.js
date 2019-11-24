(async () =>{
  const path = require('path');
  const scrape = require('website-scraper');
  const url1 = 'https://www.17sucai.com/preview/109595/2019-10-14/index/index.html'
  const name = 'stickman_swing'
  const options = {
    urls: [url1],
    directory: path.resolve(__dirname, `../games/${name}`),
  };
   
  try {
    const result = await scrape(options);
    console.log('success')
  } catch (error) {
    console.error(error)
  }
  
})()