let input=document.querySelectorAll('input');
        let span=document.querySelector('span');
        let btn=document.querySelector('#btn');
        // let span1=document.querySelector('#age')
        let mid=document.querySelector('.mid');
        let last=document.querySelector('.last');
        let pass=document.querySelector('.pass');
        let pass1=document.querySelector('#pass');
        let tel=document.querySelector('.tel');
        // let tel1=document.querySelector('#phoneno')
        // let data1=parseInt(tel1);
        let data= Array.from(input);
        
        
 

        function validate(){
            let name=data[0].value.length;
            let lastname=data[2].value.length;
            
            let no=data[6].value.length;
            let password=data[8].value.length;
            let password1=data[9].value.length;

           
            if(name<=3)
            {
                span.innerText="** name is too short";
                
                btn.type="hidden";
                
            }
            if(name===0){
                span.innerText="** name not be empty";
                // mid.innerHTML="** mid name not be empty";
                // last.innerHTML=" ** last not be empty"
                btn.type="hidden";

            }
            if(lastname===0){
                last.innerHTML="** last name be empty";
                btn.type="hidden";

            }
            if(no!=parseInt() &&  no<9){
                tel.innerHTML="** fill your no.";
                btn.type="hidden";

            }
            if(password<=5 && password1<=5){
                pass.innerHTML="** please check your password";
                pass1.innerHTML="** please check your password";
                btn.type="hidden";


            }
            if(password!=password1){
                pass.innerHTML="** pleace match your password";
                pass1.innerHTML="** pleace match your password";
            }

          
            // if(age<=18)
            // {
            //     console.log(age);
            //     span1.innerText="** Age not be empty";
            //     btn.type="hidden";

            // }
            

        }