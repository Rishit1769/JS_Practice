//You have an array named 'teaTypes' containing different types of tea change the second element of the array to 'jasmine tea'

teaTypes = ["orange tea","lemon tea","white tea","masala chai"]

for (let i = 0; i < teaTypes.length; i++) {
    if(teaTypes[i] == "white tea"){
        teaTypes[i] = "jasmine tea"
    }
}

for (let i = 0; i < teaTypes.length; i++) {
    console.log(teaTypes[i])
    
}