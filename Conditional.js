function launchBrowser(browserName){
    if (browserName==='chrome'){
        console.log("Browser name is chrome");
    }else if(browserName==='firefox'){
        console.log("Browser name is firefox");
    }
    else{
        console.log("Browser name is safari");
    }
}

function runTests(testType){
    switch(testType){
        case "sanity":
            console.log("sanity");
            break;
        case "regression":
            console.log("regression");
            break;
        default:
            console.log("smoke");
    }

}

launchBrowser("chrome")
runTests("smoke")

