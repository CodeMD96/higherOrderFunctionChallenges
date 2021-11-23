let helloFunc = () => {
    console.log("Hello Code Nation");
};

let higherOrderFunc = () =>{
    for (let i=0; i < 5; i++) {
        helloFunc();
    };
};

higherOrderFunc();