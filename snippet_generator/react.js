function enc(){
    var s=document.forms[0]['text'].value;
    var p=document.forms[0]['prefix'].value;
   
    document.getElementById('output').innerText="\""+"r_"+p+"\":"+'{\n\"prefix\":\"'+"r_"+p+'\",\n'/*+"\"scopes\":\"html,javascript,php\",\n"*/+'\"body\":'+JSON.stringify(s.replace(/\n/g,''))+"\n},";}
    function clipboard(){
        var c=document.getElementById("output").textContent;
        if (navigator.clipboard){
          window.navigator.clipboard.writeText(c);
          document.getElementById("clipboard").style.color="pink";
        }
        else{
    
          window.alert("unsuccessful");
        }
       
    }

