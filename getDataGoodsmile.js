let requestString = ''
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
    let imgString = ''
    $('img[class=itemImg]').each((i,v)=>{
        if (i==0){
            imgString = v.src
        } else{
            imgString = imgString + ',' + v.src
        }
    })
    let name = $("dt:contains('商品名')").next().text()
    let producer = $("dt:contains('メーカー')").next().text()
    let category = $("dt:contains('カテゴリー')").next().text()
    let price = $("dt:contains('価格')").next().text()
    name = name.replace(/\s\\n+/g, '').trim()
    producer = producer.replace(/\s\\n+/g, '').trim()
    category = category.replace(/\s\\n+/g, '').trim()
    price = price.match(/\d/g)
    price = price.join('')
    price = +price
    requestString = `name=${name}&producer=${producer}&category=${category}&price=${price}&image=${imgString}`
    copyToClipboard(requestString)
}

getData()

