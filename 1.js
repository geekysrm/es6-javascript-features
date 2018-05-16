// By default, we want method to be GET
function makeAjaxRequest(url, method) {
  if (!method) {
    method: "GET";
  }

  //logic to make the request
}

makeAjaxRequest("google.com"); //means GET request as method is not specified

//--------------------------------------------------------------------------------

// With default function arguments -- same effect as above
function makeAjaxRequest(url, method = "GET") {
  //logic to make the request
}

makeAjaxRequest("google.com"); //means GET request as method is not specified
makeAjaxRequest("google.com", "POST"); // means POST request as method is specified, so no defaulting occurs
makeAjaxRequest("google.com", null); //method will be null, and it wont be defaulted to GET
makeAjaxRequest("google.com", undefined); //method will be GET, and it will be defaulted to GET
