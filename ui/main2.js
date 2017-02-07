    
    var cmmtButton = document.getElementById('cmmtSubmit');
    //console.log(document.title);
    cmmtButton.onclick = function (){
        
        // Create request
            var cmmtRequest = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
            cmmtRequest.onreadystatechange = function(){
                
                if(cmmtRequest.readyState === XMLHttpRequest.DONE)
                
                    if( cmmtRequest.status === 200){
                        var counter = cmmtRequest.responseText;
                        var span = document.getElementById('cmmtCount');
                        span.innerHTML = counter.toString();
                    }
            }; 
         //choose the correct url for the request
         var name = document.title;
         var no = 1;
         var num = 'one';
         console.log(name);
         switch(name){
             
            case 'Myself' : no=1;
                            num = 'one';
                             break;
            case 'Hobbies' : no=2;
                             num = 'two';
                            break;
            case 'AIM':    no=3;
                             num = '3';
                            break;
            default: no=1;
         }
        //Make the request
         cmmtRequest.open('GET','http://hardikajmani.imad.hasura-app.io/counter/'+ no,true);
         cmmtRequest.send(null);
         
        var nameVal = document.getElementById(cmmtName).value;
        
        cmmtRequest.open('GET','http://hardikajmani.imad.hasura-app.io/submitCmmtName/' + num + '?name=' + nameVal,true);
        cmmt.Request.send(null);
    
    };
    
   
    cmmtButton.onclick = function (){
        
        // Create request
            var cmmtRequest = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
            cmmtRequest.onreadystatechange = function(){
                
                if(cmmtRequest.readyState === XMLHttpRequest.DONE)
                
                    if( cmmtRequest.status === 200){
                        var counter = cmmtRequest.responseText;
                        var span = document.getElementById('cmmtCount');
                        span.innerHTML = counter.toString();
                    }
            }; 
         //choose the correct url for the request
         var name = document.title;
         var num = 'one';
         console.log(name);
         switch(name){
             
            case 'Myself' : num = 'one';
                            break;
                            
            case 'Hobbies' : num = 'two';
                             break;
                             
            case 'AIM': num = '3';
                        break;
         }
        
        
        
        //Make the request
        
         
        var cmmtVal = document.getElementById(cmmt).value;
        
        cmmtRequest.open('GET','http://hardikajmani.imad.hasura-app.io/submitCmmtName/' + num + '?name=' + cmmtVal,true);
        cmmt.Request.send(null);
    
    };
   
    cmmtButton.onclick = function (){
        
        // Create request
            var cmmtRequest = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
            cmmtRequest.onreadystatechange = function(){
                
                if(cmmtRequest.readyState === XMLHttpRequest.DONE)
                
                    if( cmmtRequest.status === 200){
                        var counter = cmmtRequest.responseText;
                        var span = document.getElementById('cmmtCount');
                        span.innerHTML = counter.toString();
                    }
            }; 
         //choose the correct url for the request
         var name = document.title;
         var num = 'one';
         console.log(name);
         switch(name){
             
            case 'Myself' : num = 'one';
                            break;
                            
            case 'Hobbies' : num = 'two';
                             break;
                             
            case 'AIM': num = '3';
                        break;
         }
        
        
        
        //Make the request
        
         
        var nameVal = document.getElementById(cmmtName).value;
        
        cmmtRequest.open('GET','http://hardikajmani.imad.hasura-app.io/submitCmmtName/' + num + '?name=' + nameVal,true);
        cmmt.Request.send(null);
    
    };
    
  