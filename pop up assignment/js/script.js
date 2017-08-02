
//script for the popup overlay starts here
var elems = document.getElementsByClassName("popup-table__download");

Array.from(elems).forEach(v => v.addEventListener('click', function show() {
            
         document.getElementById('open-overlay').style.display = 'block';

     
         }));
//script for the popup overlay ends here