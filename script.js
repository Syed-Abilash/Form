const form = document.getElementById("form");

function submitForm() {
    // Get form values
    var FirstName = document.getElementById("first-name").value;
    var LastName = document.getElementById("last-name").value;
    var Address = document.getElementById("address").value;
    var Pincode = document.getElementById("pincode").value
    var Gender = document.getElementById("gender").type;
    var Food = document.getElementById("Food").value;
    var State = document.getElementById("State").value;
    var Country = document.getElementById("Country").value;


    // Clear form fields
   
    document.getElementById("form").reset();

   
    obj={
      FirstName:FirstName,
      LastLame:LastName,
      Address:Address,
      Pincode:Pincode,
      Gender:Gender,
      Food:Food,
      State:State,
      Country:Country
      
    }
    console.table(obj);
   }