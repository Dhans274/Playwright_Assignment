function stdScore(score){
    switch(true){
        case ( score>=90):
            console.log("Grade A");
            break;
        case (score>=75&& score<90):
            console.log('Grade B');
            break;
        case (score>=60 && score<75):
            console.log("Grade C");
            break;
        case (score>=40 && score<60):
            console.log("Grade D");
            break;
        default:
            console.log("Grade E");
            break;
    }
    
}

let score=80
stdScore(score)