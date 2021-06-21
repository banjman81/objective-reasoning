// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){
    if(user.userRole === "ADMIN"){
        return true
    }
    else{
        return false
    }
}

function getEmail(user){
    user.email = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`
    return user.email
}

function getPlaylistLength(playlist){
    return playlist.songs.length
}

function getHardestHomework(homeworks){
    if(homeworks.length == 0){
        return ""
    }
    let hardest = homeworks[0].name
    let score = homeworks[0].averageScore
    for(const homework of homeworks){
        if(homework.averageScore < score){
            hardest = homework.name
        }
    }
    return hardest
}

function createPhonebook(namesInput, numbersInput){
    let phoneBook = {}
    if(namesInput.length == 0 && numbersInput.length == 0){
        return phoneBook
    }
    for (let i=0; i< namesInput.length; i++){
        const nameSet = namesInput[i]
        phoneBook[nameSet] = numbersInput[i]
    }
    return phoneBook
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};