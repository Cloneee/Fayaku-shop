// ==UserScript==
// @name        Crawling Data
// @namespace   Violentmonkey Scripts
// @match       https://www.goodsmile.info/ja/product/*
// @grant       none
// @version     1.2
// @author      Huy da Clone
// @description 8/2/2021, 3:11:50 PM
// ==/UserScript==

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
const getData = () => {
    let imgString = []
    $('img[class=itemImg]').each((i,v)=>{
        imgString.push(v.src)
    })
    let name = $("dt:contains('商品名')").next().text()
    let description = $('div[class="description"] p').text()
    let brand = $("dt:contains('メーカー')").next().text()
    let category = $("dt:contains('カテゴリー')").next().text()
    let price = $("dt:contains('価格')").next().text()
    let release = $("dt:contains('発売時期')").next().text()
    let detail = $("dt:contains('仕様')").next().text()
    name = name.replace(/\s\\n+/g, '').trim()
    brand = brand.replace(/\s\\n+/g, '').trim()
    category = category.replace(/\s\\n+/g, '').trim()
    release = release.replace(/\s\\n+/g, '').trim()
    detail = detail.replace(/\s\\n+/g, '').trim()
    price = price.match(/\d/g)
    price = price.join('')
    price = +price
    let jsonData = {
        name: name,
        description: description,
        brand: brand,
        category: category,
        price: price,
        release: release,
        detail: detail,
        image: imgString
    }
    if (confirm('Get this product?')){
        $.ajax({
            type: "POST",
            url: 'http://localhost:8000/api/product',
            data: jsonData,
            dataType: JSON
          })
        alert('Success add to db')
    } else{
        alert('Cancel request')
    }
    
}
getData()