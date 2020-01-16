//still have to determine logic that says if the price is under a certain amount and if it is then email myself 
//also have to make it run once a day: can do that by using cron

const axios = require('axios');
const cheerio = require('cheerio')
const sendEmail = require('./sendEmail.js')

let url = 'https://www.amazon.com/dp/B081FZV45H/ref=fs_a_mb_3'

axios.get(url)
  .then(function (response) {
    const html = response.data;
    const $ = cheerio.load(html);
    let price = $('#priceblock_ourprice').text()
    console.log(price)
    if (price < '3, 000') {
      sendEmail()
    } else {
      console.log('Macbook is over your target price')
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })



//trivial example that uses hardcoded html
// const $ = cheerio.load('<p id="example">This is an <strong>example</strong> paragraph</p>')

// // We can use the same API as jQuery to get the desired result
// const txt = $('#example').text()  to access element by id we use this
// const txt = $('.example').text() to access by class we use this
// console.log(txt)
