//students score, total possible score
//15/20 -> you got a C (75%)!
//A 90-100, b 80-89, c 70-79, D 60-69, F 0-59

let testScore = function(studentScore) {
    let maxScore = 20
    let score = (studentScore / maxScore) * 100
    
    if (score >= 90) {
        return `You got a A (${score}%)!`
    }

    if (score >= 80 && score <= 89) {
        return `You got a B (${score}%)!`
    }

    if (score >= 70 && score <= 79) {
        return `You got a C (${score}%)!`
    }

    if (score >= 60 && score <= 69) {
        return `You got a D (${score}%)!`
    }

    else {
        return `You got a F (${score}%)`
    }
}


let score = testScore(3)

console.log(score)


const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `you got a ${letterGrade} (${percent}%)`
}

const grade = gradeCalc(3, 20)
console.log(grade)