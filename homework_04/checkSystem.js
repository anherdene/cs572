const os = require('os');
const { Observable} = require('rxjs');

const obs$ = Observable.create((observer) => {
    console.log("Checking you system ...");
    const totmem = os.totalmem();
    const cpusCount = os.cpus().length;
    console.log(totmem);
    console.log(cpusCount);
    if (totmem < 4*1024*1024*1024) {
        observer.error("This app needs at least 4 GB of RAM");
    }

    if (cpusCount < 2) {
        observer.error("Processor is not supported");
    }
    observer.complete();
});

function checkSystem() {
    const sub = obs$.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log("System is checked successfully")
    );
}

checkSystem();