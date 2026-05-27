
function vendorLogin(){

  alert("Vendor Portal Coming Soon");

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