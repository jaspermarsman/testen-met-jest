// dit is de plek waar onze functies moeten komen te staan

function add(num1, num2) {
    return num1 + num2;
}

function findByName(names, user){
    //1. itereer over de array heen met een for-loop
    //2. Vergelijk de name van iedere entry met de user die we moeten vinden
    //3. Als de namen overeenkomen, moet het gehele object teruggegeven worden
    for (let i = 0; i < names.length; i++){
        const currentUser = names[i];

        if(currentUser.name === user){

            return currentUser;
        }

    }
    return null;
}


module.exports = {
    add: add,
    findByName: findByName,
}