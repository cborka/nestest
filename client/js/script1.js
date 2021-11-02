import axios from 'axios'

function say(msg) {
    // alert(msg);
    log(msg);
}


 function test2() {

     axios.post("graphql",
         {data2: 1}
         , {
             headers: {
                 'Content-Type': 'graphql/text'
             }
         })
         .then(response => {
             alert("successsssss");
         })
         .catch(function (error) {
             alert(error);
         });
 }