(function(){
    emailjs.init("jRJ7G-GDn2Dm8NgMs");
})();

function sendMail(){
    var params = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        houseNumPU: document.getElementById("houseNumPU").value,
        roadPU: document.getElementById("roadPU").value,
        areaPickUp: document.getElementById("areaPickUp").value, 
        postcode: document.getElementById("postcode").value,
        passengers: document.getElementById("numOfPassengers").value,
        DOPU: document.getElementById("DOPU").value,
        timePU: document.getElementById("timePU").value,
        houseNumDO: document.getElementById("houseNumDO").value,
        roadDO: document.getElementById("roadDO").value,
        town: document.getElementById("town/cityDO").value,
        postcodeDO: document.getElementById("postcodeDO").value,
        textarea2: document.getElementById("textarea2").value,
    };

    const serviceID = "service_q4jxi16";
    const templateID = "template_yafar8v";

    emailjs.send(serviceID, templateID, params)
        .then(res => {

            // Clear form fields
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("houseNumPU").value = "";
            document.getElementById("roadPU").value = "";
            document.getElementById("areaPickUp").selectedIndex = 0;
            document.getElementById("postcode").value = "";
            document.getElementById("numOfPassengers").selectedIndex = 0;
            document.getElementById("DOPU").value = "";
            document.getElementById("timePU").value = "";
            document.getElementById("houseNumDO").value = "";
            document.getElementById("roadDO").value = "";
            document.getElementById("town/cityDO").value = "";
            document.getElementById("postcodeDO").value = "";
            document.getElementById("textarea2").value = "";
            document.getElementById("checkbox").checked = false;
            document.getElementById("checkbox2").checked = false;
           
            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch(err => console.log(err));
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    sendMail();
});