num=12;
bpf=0;
rem=0;
bpfr=0;
halved=num;

do {
    
    while (halved>=2) {
        
    rem=halved%2;
    
    halved=(halved-rem)/2;
    
    if (bpf<halved) {bpf=halved;}
    console.log("halved "+halved);
    
    }
    
    rem=bpf%2;
    console.log("bpf "+bpf);
    bpf=(bpf+rem)/2;
    
    if (bpfr<bpf) {bpfr=bpf;}
    
    
} while (bpf>=2);



console.log("bpfr: "+bpfr);