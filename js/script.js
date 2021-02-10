var areatexto=document.querySelector('textarea');var output=document.querySelector('tbody');var totalsum=parseFloat('0');var btcprice=parseFloat('0');var fiatsum=parseFloat('0');var soma1=document.getElementById('soma1');var spin=document.getElementById('spin');function api(){spin.style.cursor='default';spin.style.display='';var submit1=document.getElementById('submit1');submit1.style.display='none';var address=areatexto.value;var list=address.split("\n");var coindesk=new XMLHttpRequest();var url2="https://api.coindesk.com/v1/bpi/currentprice/BRL.json";coindesk.open("GET",url2);coindesk.responseType='json';coindesk.onreadystatechange=function(){if(this.readyState==4&&this.status==200){btcprice+=coindesk.response.bpi.USD.rate_float;}},coindesk.send();for(let i=0;i<list.length;i++){updateDisplay(list[i]);}}
function updateDisplay(address){var request=new XMLHttpRequest();var url="https://www.sochain.com/api/v2/get_address_balance/bitcoin/"+address;request.open("GET",url);request.responseType='json';request.onload=setTimeout(function(){var saldo=request.response.data.confirmed_balance;soma1.style.display='';document.getElementById("spin").innerHTML=" <span class='glyphicon glyphicon-star' aria-hidden='true'></span> Check Balance";if(!isNaN(parseFloat(saldo))){totalsum+=parseFloat(saldo);fiatsum+=(saldo*btcprice);output.innerHTML+='<tr><td><a href="https://blockchair.com/bitcoin/address/'+address+'?from=bitcoindata.science" title="View address in a block explorer." target="_blank" style="color:#28a745">'+address+'</td><td>'+saldo+'</td><td>'+(saldo*btcprice).toLocaleString('en-US',{style:'currency',currency:'USD',});+'</td></tr>';}else{output.innerHTML+='<tr><td>'+address+'</td><td> Invalid bitcoin address </td><td> 0 </td></tr>';}},2000);request.send();}
function somatotal(){var soma2=document.getElementById('soma2');soma1.style.display='none';soma2.style.display='';output.innerHTML+='<tr class="text-light2"><td class="text-uppercase"><strong>Total Balance</strong></td><td><strong>'+totalsum.toFixed(8)+'</strong></td><td><strong>'+(fiatsum).toLocaleString('en-US',{style:'currency',currency:'USD',});+'</strong></td></tr>';}
if(window.localStorage["TextEditorData"]){areatexto.value=window.localStorage["TextEditorData"];}
areatexto.addEventListener("keyup",function(){window.localStorage["TextEditorData"]=areatexto.value;});
