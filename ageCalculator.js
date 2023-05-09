function calcAge(){
    if (document.getElementById('dob') != ''){
        let varDob = document.getElementById('dob').value
        let currentDate = new Date()
        let varDobDate = new Date(varDob)
        let age = currentDate.getFullYear() - varDobDate.getFullYear()
        let month = currentDate.getMonth() - varDobDate.getMonth()
        if ( month < 0 || (month === 0 && currentDate.getDate() < varDobDate.getDate())){
            age --
        }
        document.getElementById('displayAge').innerHTML = age
    }
    else{
        alert('Please enter a date so age can be calculated')
    }
}