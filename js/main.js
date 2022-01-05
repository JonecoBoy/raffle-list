let objects = [
	{nome:'claudio', peso: '1', grupo: '2'},
	{nome:'claudio', peso: '1', grupo: '2'},
	{nome:'claudio', peso: '1', grupo: '2'}
]

renderTable(objects)

function renderTable(objects){
	objects.array.forEach(element => {
		console.log(element.value)
	});
	}
}


// if(!objects){
// 	objects=[]
// }

// function toFirstUpperCase(stringInput){
// return stringInput[0].toUpperCase() + stringInput.slice(1);
// }

// function toCurrency(input){
// 	return parseFloat(input).toFixed(2)
// 	}
// 	function addBRL(input){
// 		return "R$ "+input
// 		}

// function getTotal(objects){
// 	var total = 0;
// 	var quantidade = 0;

// for (var i in objects){
// 	total +=objects[i].amount * objects[i].value
	
// }
// quantidade=parseInt(i)+1;
// return {total: total, quantidade: quantidade}
// }

// var html = "<tbody>"
// for(var i in objects){
// subtotal = objects[i].amount * objects[i].value
// html += "<tr id=tr"+ i +"><th>"+i+
// "</th><td>"+toFirstUpperCase(objects[i].desc)+
// "</td><td>"+objects[i].amount+
// "</td><td>"+addBRL(toCurrency(objects[i].value))+
// "</td><td>"+addBRL(toCurrency(subtotal))+
// "</td><td><button type='a' id = button"+i  + " onclick='editData(this.id)'>Editar</button> | <button type='a' id = button"+i  + " onclick='deleteData(this.id)'>Deletar</button></td></tr>";
// }

// html += "</tbody>"

// document.getElementById("tabela").getElementsByTagName("tbody")[0].innerHTML = html

// 	// add header do total embaixo
// 	var thead = document.createElement("thead")
// 	var trtotal = document.createElement("tr")
	

// 	for (var i=1;i<7;i++)
// 	{
// 		var thdesc2 = document.createElement("th")
// 		switch (i) {
// 			case 0:
// 				thdesc2.innerHTML=getTotal(objects).quantidade
// 				break;
// 			case 5:
// 				thdesc2.innerHTML=addBRL(toCurrency(getTotal(objects).total))
// 				break;
			
// 			default:
// 				thdesc2.innerHTML="-"
// 				break;
// 		}
// 		trtotal.appendChild(thdesc2)
		
// 	}

// 	thead.appendChild(trtotal)
// 	document.getElementById("tabela").appendChild (thead)
	
// function addData()
// {
// var desc = document.getElementById("inputDesc").value
// var amount = document.getElementById("inputAmount").value
// var value = document.getElementById("inputValue").value
// var total = addBRL(toCurrency(amount*value))


// objects.push(
// 	{desc:desc, amount:amount,value:value}
// )

// localStorage['objects'] = JSON.stringify(objects);

// recalc()
// resetinputs()
// var tr = document.createElement("tr")
// tr.id = "tr"+ (objects.length -1)
// tr.innerHTML = 	"<th>"+ parseInt(objects.length-1)+"</th>"+
// 				"<td>"+desc+"</td>"+
// 				"<td>"+amount+"</td>"+
// 				"<td>"+value+"</td>"+
// 				"<td>"+total+"</td>"+
				
// 				"<td><button type='a' id = button"+ (objects.length -1)  + " onclick='editData(this.id)'>Editar</button> | <button type='a' id = button"+ (objects.length -1)  + " onclick='deleteData(this.id)'>Deletar</button></td></tr>";
