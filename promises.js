function fetchData(){
   return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let success = true;
            if (success){
                resolve("Fetched data successfully");
            }else{
                reject("Unable to fetch data");
            }
        }, 3000);
   })
}

fetchData()
    .then((data) =>{
        console.log(data)
    })
    .catch((error) =>{
        console.log(error)
    })