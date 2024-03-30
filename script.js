(function(){
    var names=['Suyash','Joe','Jack','Revati','Jon','Robb','Tywin'];    
    
    for(var i=0;i<names.length;i++){
        var firstLetter=names[i].charAt(0).toLocaleLowerCase();
        if (firstLetter==='j'){
            byeSpeaker(names[i]);
        }
        else{
            helloSpeaker(names[i]);
        }
    }
})();