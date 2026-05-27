function vendorLogin() {
  window.location.href = "https://pathakbiofuels.com/vendor";
}

function sendInquiry() {

  let requirement = document.getElementById("requirement").value;
  let contact = document.getElementById("contact").value;
  let name = document.getElementById("customerName").value;

  let subject = "New Biomass Inquiry";

  let body =
`Requirement: ${requirement}

Contact Number: ${contact}

Customer Name: ${name}`;

  window.location.href =
`mailto:pathakbiofuels@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

}
function toggleSection(id) {
  const sections = ['quote', 'contact', 'products', 'about'];

  sections.forEach(section => {
    if(section === id){
      document.getElementById(section).classList.toggle('hidden');
    } else {
      document.getElementById(section).classList.add('hidden');
    }
  });
}