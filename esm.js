export const isVote = (age) => { 
    if (age >= 18) {
        return "Eligible to vote";
    }
    else {
        return "Not eligible to vote";
    }   

}