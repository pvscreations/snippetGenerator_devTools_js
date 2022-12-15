function enc(){
var s=document.forms[0]['text'].value;
var p=document.forms[0]['prefix'].value;
l=s.split(/(<[^<]*>)/);
c=1;
for (var i of l){
  if (i.search(/\w/)==-1){
      l.splice(l.indexOf(i),1);
      continue;
  }
  if (i.indexOf("<")==-1 | i.indexOf(">")==-1) {
    string=i.replace(/\n/g," ");
    st="${"+c+":"+string+"}";
    l[l.indexOf(i)]=st;
    c++;
  }

}
// s=s.replace(/\"/,'\\\"');
document.getElementById('output').innerText="\""+p+"\":"+'{\n\"prefix\":\"'+p+'\",\n'+"\"scopes\":\"html,javascript\",\n"+'\"body\":'+JSON.stringify(l)+"\n},";
}
function clipboard(){
    var c=document.getElementById("output").textContent;
    window.navigator.clipboard.writeText(c);
    window.alert("succesfully copied");
}
