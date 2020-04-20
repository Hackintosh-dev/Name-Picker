firstMale = [];
firstFemale = [];
middle = [];
last = [];

hack.gameData.name.forEach(v => {
    switch (v.data.type) {
        case 0:
            (v.data.gender===2?firstMale:firstFemale).push(v.data.value)
            break;
        case 1:
            middle.push(v.data.value);
            break;
        case 2:
            last.push(v.data.value);
            break;
    }
})

console.log(firstMale);
console.log(firstFemale);
console.log(middle);
console.log(last);
