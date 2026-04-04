function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({name: "rishitcodes",url: "rishit.codes"});
        }, 3000);
    });
}

async function fetchUserData() {
    try {
        console.log("data fetched successfully")
        let data = await fetchData();
        console.log(data)
    } catch (error) {
        console.error("Error fetching data")
    }
}

fetchUserData()