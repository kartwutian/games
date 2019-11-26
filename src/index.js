(async () =>{
  const path = require('path');
  const scrape = require('website-scraper');
  const url1 = 'http://sda.4399.com/4399swf/upload_swf/ftp22/gamehwq/20170831/01/index.htm'
  const name = 'football'
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