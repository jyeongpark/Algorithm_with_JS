function solution(n) {
    var answer = 0;
    n = String(n).split("");
    return parseInt(n.sort((a,b)=>b-a).join(""));
}
