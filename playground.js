
var romanToInt = function (s) {//fizzbuzz like
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if ((s[i] === 'C' && s[i + 1] === 'M')) { sum += 900; i++; continue }
        if ((s[i] === 'C' && s[i + 1] === 'D')) { sum += 400; i++; continue }
        if ((s[i] === 'X' && s[i + 1] === 'C')) { sum += 90; i++; continue }
        if ((s[i] === 'X' && s[i + 1] === 'L')) { sum += 40; i++; continue }
        if ((s[i] === 'I' && s[i + 1] === 'X')) { sum += 9; i++; continue }
        if ((s[i] === 'I' && s[i + 1] === 'V')) { sum += 4; i++; continue }
        if (s[i] === 'M') { sum += 1000 }
        if (s[i] === 'D') { sum += 500 }
        if (s[i] === 'C') { sum += 100 }
        if (s[i] === 'L') { sum += 50 }
        if (s[i] === 'X') { sum += 10 }
        if (s[i] === 'V') { sum += 5 }
        if (s[i] === 'I') { sum += 1 }
    }
    return sum
}
var romanToInt = function(s) {
    const system = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
    
        let sum = 0;
    
        for (let i = 0; i < s.length; i++) {
            const current = system[s[i]];
            const next = system[s[i + 1]];
    
            if (current < next) {
                sum += next - current;
                i++;
            } else {
                sum += current;
            }
        }
        return sum;
    }