function fibonacci (n) {
    var sequence = [0,1,]
    
    var seq0 = [0];
    var seq1 = [0,1];
        
    if (n === 1) {return seq0}
    else if (n === 2) {return seq1}
    else
     
    var i = 0
        while (i+2<n) {
        var place0 = sequence[i];
        var place1 = sequence[i+1];
        var place2 = place0+place1;
        sequence.push (place2);
        i++
        }  
    
    console.log (sequence);
    }