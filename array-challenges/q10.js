//create a city bucket list and if london is there so make sure isLondon returns true

let citiesBucketList = ["mumbai","delhi","london","newyork"]
let isLondon = false

for(let i = 0;i<citiesBucketList.length;i++){
    if(citiesBucketList[i] == "london"){
        isLondon = true
    }else{
        continue
    }
}

console.log(isLondon)