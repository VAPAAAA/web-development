function check() {
    let hetu = document.getElementById("idcode").value;
    let ekat6 = hetu.substring(0,6);
    let vuosimerkki = hetu.substring(6,7);
    let järjestysnumero = hetu.substring(7,10);

// Basic errors
    if (hetu.length != 11) {
        document.getElementById("error").innerText = "Id code must have 11 characters."
        document.getElementById("sex").innerText = ""
        document.getElementById("age").innerText = ""
        document.getElementById("result").innerText = ""
        return;
    } else if (isNaN(ekat6)) {
        document.getElementById("error").innerText = "Id code must have 6 numbers at first."  
        document.getElementById("sex").innerText = ""
        document.getElementById("age").innerText = ""
        document.getElementById("result").innerText = ""
        return;
    } else if (vuosimerkki !="A" && vuosimerkki !="+" && vuosimerkki !="-") {
        document.getElementById("error").innerText = "The century mark must be +, - or A."
        document.getElementById("sex").innerText = ""
        document.getElementById("age").innerText = ""
        document.getElementById("result").innerText = ""
        return;
    } else if (isNaN(järjestysnumero)) {
        document.getElementById("error").innerText = "Order number must be a number."
        document.getElementById("sex").innerText = ""
        document.getElementById("age").innerText = ""
        document.getElementById("result").innerText = ""
        return;
    } else {
        document.getElementById("error").innerText = ""
    } 

// Checks that the given date is right.
    
    function checkDate(ekat6, vuosimerkki) {
        let hetudd = parseInt(ekat6.substring(0,2));
        let hetumm = parseInt(ekat6.substring(2,4));
        let hetuyy = parseInt(ekat6.substring(4,6));
        let currentYear = parseInt(new Date() .getFullYear());
        let ERRORS = ""
    
        if (vuosimerkki == "A"){
            hetuyy = hetuyy+2000
        }  else if (vuosimerkki == "-"){
         hetuyy = hetuyy+1900
        } else if (vuosimerkki == "+"){
            hetuyy = hetuyy+1800
        }
         ;
        if (hetudd > 31 || hetudd < 1 ){
            ERRORS = "Day must be 1 ... 31"
        } else if (hetumm > 12 || hetumm <1){
            ERRORS = "Month must be 1 ... 12"
        } else if (hetuyy > currentYear){
            ERRORS = "Year is too big"
        }
        return ERRORS;
       }
       ;
       let datecheck = checkDate(ekat6,vuosimerkki)
       if( datecheck != ""){
        document.getElementById("error").innerText = datecheck
        document.getElementById("sex").innerText = ""
        document.getElementById("age").innerText = ""
        document.getElementById("result").innerText = ""
        return;
       }
    ;
       
 // Calculates person's age based on a year.

     function calculateAge(ekat6, vuosimerkki) {
        let currentYear = new Date() .getFullYear();
        let hetuVuosi = parseInt(ekat6.substring(4,6));

        if (vuosimerkki == "A") {
           hetuVuosi = hetuVuosi + 2000
        } else if (vuosimerkki == "-"){
            hetuVuosi = hetuVuosi + 1900
        } else if (vuosimerkki == "+"){
            hetuVuosi = hetuVuosi + 1800
        }
        return  currentYear - hetuVuosi ;
    }
    ;

    ika = calculateAge(ekat6,vuosimerkki);
    document.getElementById("age").innerText = ika;

// Finds out the sex of a person.
    
    function findSex(järjestysnumero) {
        let sex = ""
        let järjn = parseInt(järjestysnumero)
        if (järjn % 2 != 0){
            sex = "male"
        } else if (järjn % 2 == 0){
            sex = "female"
        }
        return sex
    }
    ;
    sex = findSex(järjestysnumero);
    document.getElementById("sex").innerText = sex;

// Calculates the control character of the personal id code.

     function calculateCheckMark(ekat6, järjestysnumero){
        let checkMarks = "0123456789ABCDEFHJKLMNPRSTUVWXY"
        let yhdistetty = ekat6+järjestysnumero;
        let tarkistusluku = (parseInt(yhdistetty) % 31);
        let tarkistusmerkki = checkMarks.charAt(tarkistusluku);

        if (tarkistusmerkki != hetu.substring(10,11)){
            return `Identification code is not right. Calculated control character is ${tarkistusmerkki}.`
        } else {
            return "Identification code is right."
        }
    }
    ;
    let CheckMarkCheck = calculateCheckMark(ekat6, järjestysnumero);
    document.getElementById("result").innerText = CheckMarkCheck;
};
