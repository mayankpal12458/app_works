'use strict'
const fs=require('fs');


module.exports=function(){
    return {
        setRouting: function(router){
            router.get('/',this.homepage);
            router.post('/',this.homepost);
        },

        homepage:function(req,res){
            res.render('home');
        },
        homepost:function(req,res){
            var editnum=req.body.editnum;
            fs.readFile('file.txt', 'utf8', function (err, data) {

                if (err) throw err;
              
                var wordsArray = splitByWords(data);
                var wordsMap = createWordMap(wordsArray);
                var finalWordsArray = sortByCount(wordsMap);
              
            
                var i;
                var arr=[];
                for(i=0;i<editnum;i++){
                    arr.push(finalWordsArray[i]);
                }
               // console.log(arr);
               res.send(arr);
               
              });
              
              
              function splitByWords (text) {
                // split string by spaces (including spaces, tabs, and newlines)
                var wordsArray = text.split(/\s+/);
                return wordsArray;
              }
              
              
              function createWordMap (wordsArray) {
              
                
                var wordsMap = {};
              
                wordsArray.forEach(function (key) {
                  if (wordsMap.hasOwnProperty(key)) {
                    wordsMap[key]++;
                  } else {
                    wordsMap[key] = 1;
                  }
                });
              
                return wordsMap;
              
              }
              
              
              function sortByCount (wordsMap) {
              
                // sort by count in descending order
                var finalWordsArray = [];
                finalWordsArray = Object.keys(wordsMap).map(function(key) {
                  return {
                    name: key,
                    total: wordsMap[key]
                  };
                });
              
                finalWordsArray.sort(function(a, b) {
                  return b.total - a.total;
                });
              
                return finalWordsArray;
              
              }
            
        }
    }
}