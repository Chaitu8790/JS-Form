// Form Elements Validation
function validateForm() 
{
    // FirstName Validation
    var x = document.forms["myform"]["fname"].value;
        if (x == "")
        {
            document.getElementById("fnm").innerHTML="*Please Enter Firstname";
            document.getElementById("fnm").style.color="red";
            document.getElementById("fname").focus();
            return false;
        }
        else
        {
            document.getElementById("fnm").innerHTML="";
        }
    // LastName Validation
    var x = document.forms["myform"]["lname"].value;
        if (x == "") 
        {
            document.getElementById("lnm").innerHTML="*Please Enter Lastname";
            document.getElementById("lnm").style.color="red";
            document.getElementById("lname").focus();
            return false;
        }
        else
        {
            document.getElementById("lnm").innerHTML="";
        }
    // Email Validation
    var x = document.forms["myform"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
        {
            document.getElementById("enm").innerHTML="*Please Enter Valid Email";
            document.getElementById("enm").style.color="red";
            document.getElementById("email").focus();
            return false;
        }
        else
        {
            document.getElementById("enm").innerHTML="";
        }

    // Phone number Validation
    var val=document.forms["myform"]["pn"].value;
        if (/^\d{4}-\d{3}-\d{4}$/.test(val))
        {

        }
    else
        {
            document.getElementById("pnm").innerHTML="*Please Enter Valid Phone number";
            document.getElementById("pnm").style.color="red";
            document.getElementById("pn").focus();
            return false;
        }

    // Gender Validation


    var genderM=myform.gender_male;
    var genderF=myform.gender_female;

        if(genderM.checked==false && genderF.checked==false ) 
        {
            document.getElementById("gnm").innerHTML="*Please Select Gender";
            document.getElementById("gnm").style.color="red";
            document.getElementById("gn").focus();
            return false;
        }   
        else
        {
            document.getElementById("gnm").innerHTML=""; 
        } 
    
    // Country-Selection Validation
        if(document.getElementById('mySelect').selectedIndex == 0)
        {
            document.getElementById("cnm").innerHTML="*Please Select Country";
            document.getElementById("cnm").style.color="red";
            document.getElementById("mySelect").focus();
            return false;
        }
        else
        {
            document.getElementById("cnm").innerHTML=""; 
        }
    // Checkbox Validation  
        if(!this.myform.checkbox.checked)
        {
            alert('You must agree to the terms first.');
            return false;
        }

// Final Submit
    else
        {
        alert("Submitted Successfully");
        return true;
        }
    
    
     

}


