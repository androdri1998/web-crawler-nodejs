let request=require('request');
let cheerio=require('cheerio');
let fs=require('fs');

request('http://www.imdb.com/chart/moviemeter', (err,res,body) =>{
    if(err) console.log('Erro: '+err);

    let $=cheerio.load(body);

    $('.lister-list tr').each(function(){
        let title=$(this).find('.titleColumn a').text().trim();
        let rating=$(this).find('.imdbRating strong').text().trim();

        console.log('Titulo: '+title);
        fs.appendFile('imdb.txt',title+' '+rating+'\n',()=>{});
    });
});
