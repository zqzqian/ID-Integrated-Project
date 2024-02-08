//////////////////////// sign up ///////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    
    const APIKEY = "65c47aedc5ab47165bcd60ba";
    getContacts();
    document.getElementById("update-userinfo-container").style.display = "none";
    document.getElementById("add-update-msg").style.display = "none";
  
    //submit form listener
    document.getElementById("userinfo-submit").addEventListener("click", function (e) {

      e.preventDefault();
   
      //retrieve form data
      let infoUsername = document.getElementById("userinfo-username").value;
      let infoEmail = document.getElementById("userinfo-email").value;
      let infoPassword = document.getElementById("userinfo-password").value;

      //get form values when user clicks on the "sign up" button
      let jsondata = {
        "username": infoUsername,
        "email": infoEmail,
        "password": infoPassword
      };
  
      //send information to database
      let settings = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
        beforeSend: function () {

          document.getElementById("userinfo-submit").disabled = true;
          document.getElementById("add-userinfo-form").reset();
        }
      };
  
      //send AJAX request to database
      fetch("https://salvagedsavings-47eb.restdb.io/rest/userinfo", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById("userinfo-submit").disabled = true;
          document.getElementById("add-update-msg").style.display = "block";
          setTimeout(function () {
            document.getElementById("add-update-msg").style.display = "none";
          }, 3000);

          getContacts();
        });
    });
  
    function getContacts(limit = 10, all = true) {
  
      //retrieve info
      let settings = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
      };
  
      //make AJAX calls
      fetch("https://salvagedsavings-47eb.restdb.io/rest/userinfo", settings)
      .then(response => response.json())
      .then(response => {
        let content = "";

        for (var i = 0; i < response.length && i < limit; i++) {
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].username}</td>
          <td>${response[i].email}</td>
          <td>${response[i].password}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-userinfo-container' class='update' data-id='${response[i]._id}' data-username='${response[i].username}' data-email='${response[i].email}' data-password='${response[i].password}'>Update</a></td></tr>`;

        }

        document.getElementById("userinfo-list").getElementsByTagName("tbody")[0].innerHTML = content;

        document.getElementById("total-userinfo").innerHTML = response.length;
      });
  }

  //update listener
  document.getElementById("userinfo-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("update")) {
      e.preventDefault();

      let infoUsername = e.target.getAttribute("data-username");
      let infoEmail = e.target.getAttribute("data-email");
      let infoPassword = e.target.getAttribute("data-password");
      let contactId = e.target.getAttribute("data-id");


      document.getElementById("update-userinfo-username").value = infoUsername;
      document.getElementById("update-userinfo-email").value = infoEmail;
      document.getElementById("update-userinfo-password").value = infoPassword;
      document.getElementById("update-userinfo-id").value = contactId;
      document.getElementById("update-userinfo-container").style.display = "block";
    }
  });

  document.getElementById("update-userinfo-submit").addEventListener("click", function (e) {
    e.preventDefault();

    let infoUsername = document.getElementById("update-userinfo-username").value;
    let infoEmail = document.getElementById("update-userinfo-email").value;
    let infoPassword = document.getElementById("update-userinfo-password").value;
    let contactId = document.getElementById("update-userinfo-id").value;

    console.log(document.getElementById("update-userinfo-msg").value);
    console.log();

    //call update userinfo function which makes AJAX call to restdb
    updateForm(contactId, infoUsername, infoEmail, infoPassword);
  });

  function updateForm(id, infoUsername, infoEmail, infoPassword) { 

    var jsondata = { "username": infoUsername, "email": infoEmail, "password": infoPassword };
    var settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata)
    };

    //send AJAX request
    fetch(`https://salvagedsavings-47eb.restdb.io/rest/userinfo/${id}`, settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("update-userinfo-container").style.display = "none";

        getContacts();
      });
  }

  //redirects user to lottie page when they click the "sign up" button
  document.getElementById("userinfo-submit").addEventListener("click", function(e) {
    e.preventDefault(); 

    let infoUsername = document.getElementById("userinfo-username").value;
    let infoEmail = document.getElementById("userinfo-email").value;
    let infoPassword = document.getElementById("userinfo-password").value;

    let jsondata = {
      "username": infoUsername,
      "email": infoEmail,
      "password": infoPassword
    };

    let settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata),
      beforeSend: function() {
        document.getElementById("userinfo-submit").disabled = true;
        document.getElementById("add-userinfo-form").reset();
      }
    };

    fetch("https://salvagedsavings-47eb.restdb.io/rest/userinfo", settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("userinfo-submit").disabled = false;

        window.location.href = "/html/lottie.html";
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById("userinfo-submit").disabled = false;
      });
  });

});

//////////////////////////// forum //////////////////////////////////

//increase like count when user clicks on the heart and decreases like count when they click again
var likeCount = document.getElementsByClassName("likeCount");

function likeButton(like, likeCount) {
  var currentLikeCount = parseInt(likeCount.innerText);

  if (like.classList.contains("fa-solid")) {
    like.classList.remove("fa-solid");
    like.classList.add("fa-regular");
    currentLikeCount = currentLikeCount - 1;
  } else {
    like.classList.remove("fa-regular");
    like.classList.add("fa-solid");
    currentLikeCount = currentLikeCount + 1;
  }

  likeCount.innerText = currentLikeCount;
}

//open and close comment overlay
function on(overlayId) {
  document.getElementById(overlayId).style.display = "block";
}

function off(overlayId) {
  document.getElementById(overlayId).style.display = "none";
}