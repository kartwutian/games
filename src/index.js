(async () =>{
  const path = require('path');
  const scrape = require('website-scraper');
  const url1 = 'http://flash1.7k7k.com/h5/2016/yzwxt/index.html'
  const name = 'yzwxt'
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