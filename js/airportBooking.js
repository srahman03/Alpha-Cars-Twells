(function(){
    emailjs.init("jRJ7G-GDn2Dm8NgMs");
})();

function sendMail() {
    var params = {
        nameForAirport: document.getElementById("nameForAirport").value,
        airportHousePU: document.getElementById("airportHousePU").value,
        airportRoadPU: document.getElementById("airportRoadPU").value,
        airportPostcodePU: document.getElementById("airportPostcodePU").value,
        airportPassengersPU: document.getElementById("airportPassengersPU").value,
        airportDatePU: document.getElementById("airportDatePU").value,
        airportTimePU: document.getElementById("airportTimePU").value,
        lugaggesPU: document.getElementById("lugaggesPU").value,
        handLugaggesPU: document.getElementById("handLugaggesPU").value,
        airportOutbound: document.getElementById("airportOutbound").value,
        outboundFNumber: document.getElementById("outboundFNumber").value,
        outboundFDate: document.getElementById("outboundFDate").value, 
        outboundFTime: document.getElementById("outboundFTime").value, 
        airportInbound: document.getElementById("airportInbound").value,
        inboundFNumber: document.getElementById("inboundFNumber").value,
        inboundDate: document.getElementById("inboundDate").value,
        inboundTime: document.getElementById("inboundTime").value,
        textareaInbound: document.getElementById("textareaInbound").value,
    };

    const serviceID = "service_q4jxi16";
    const templateID = "template_6ym3xa7";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear form fields
            document.getElementById("nameForAirport").value = "";
            document.getElementById("airportHousePU").value = "";
            document.getElementById("airportRoadPU").value = "";
            document.getElementById("airportPostcodePU").value = "";
            document.getElementById("airportPassengersPU").value = "";
            document.getElementById("airportDatePU").value = "";
            document.getElementById("airportTimePU").value = "";
            document.getElementById("lugaggesPU").value = "";
            document.getElementById("handLugaggesPU").value = "";
            document.getElementById("airportOutbound").value = "";
            document.getElementById("outboundFNumber").value = "";
            document.getElementById("outboundFDate").value = "";
            document.getElementById("outboundFTime").value = "";
            document.getElementById("airportInbound").value = "";
            document.getElementById("inboundFNumber").value = "";
            document.getElementById("inboundDate").value = "";
            document.getElementById("inboundTime").value = "";
            document.getElementById("textareaInbound").value = "";
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