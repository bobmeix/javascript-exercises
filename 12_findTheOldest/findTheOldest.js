const findTheOldest = function(people) {
    
    let oldest = people.sort((a, b) => 
    getAge(b.yearOfBirth, b.yearOfDeath) - getAge(a.yearOfBirth,  a.yearOfDeath))[0];
    return oldest;
};

const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
