// let objects = JSON.parse(localStorage.getItem["list1"]) : []

let objects = JSON.parse(localStorage.getItem("lista1"))

!objects ? objects=[] : 


renderTable(objects)


function renderTable(objects){
	let body = document.getElementById("table-peoples").getElementsByTagName("tbody")[0]
	
	let html = "";
	objects.forEach(function(value,index)
	{
		index = index+1;
		html +=  "<tr id=tr"+index+" onMouseOver='colorSelected(event.type,this.id)' onMouseOut='colorSelected(event.type,this.id)'>" +
				"<td>"+ index +"</td>" +
				"<td>"+value.name+"</td>" +
				"<td>"+value.weight+"</td>" +
				"<td>"+value.group+"</td>" +
				"<td>" +
				"<div class='buttons'>" +
				"<button class='button is-info is-small is-light'>editar</button>" +
				"<button class='button is-danger is-small is-light' onclick=deleteObject('"+index+"')>deletar</button>" +
				"</div>" +
				"</td>" +
				"</tr>"
	})
	body.innerHTML = html
	}

	function colorSelected(eventType,row){

		let buttons = document.getElementById(row).getElementsByTagName("button")
		let numberOfButtons = buttons.length

		switch (eventType) {

			case "mouseover":
				document.getElementById(row).classList.add("is-selected")
				for(let i=0;i<numberOfButtons;i++){
					buttons[i].classList.remove("is-light")
				}		
				break;

			default:
				document.getElementById(row).classList.remove("is-selected")
				for(let i=0;i<numberOfButtons;i++){
					buttons[i].classList.add("is-light")
				}	
				break;
		}
	}

	function createObject()
	{
		let name = document.getElementById("name").value
		let weight = document.getElementById("weight").value
		let group = document.getElementById("group").value
		
		objects.push({name: name, weight: weight, group: group})

		renderTable(objects)
	}

	function deleteObject(row)
	{
		row = parseInt(row-1)
		
		objects.splice(row,1)

		renderTable(objects)
	}




	function deleteAllObjects()
	{
		// objects = [];
		// renderTable(objects)
		document.getElementById('modal').classList.add('is-active');
	}

	function openModal(sourceElement)
	{	
		document.getElementById('modal').classList.add('is-active');
		elementId = sourceElement.id

		switch (elementId) {
			case 'buttonClearList':
				document.getElementById('modal-title').innerHTML = 'Erase All Records?'
				document.getElementById('modal-content').innerHTML = 'Are You Sure that you wish to delete all data in the list?'
				document.getElementById('modal-save-button').innerHTML = 'Erase'
				document.getElementById('modal-save-button').classList.add('is-warning')
				document.getElementById('modal-save-button').classList.add('buttonClearList')
				break;
			default:
				break;
		}

	}

	function saveModal()
	{
		// objects = [];
		// renderTable(objects)
		//document.getElementById('modal').classList.remove('is-active');
		sendNotification('is-danger','teste')
	}


	function closeModal()
	{
		// objects = [];
		// renderTable(objects)
		document.getElementById('modal').classList.remove('is-active');
		sendNotification('is-primary','test2e')
	}


	function saveList()
	{
		localStorage.setItem('lista1', JSON.stringify(objects))
	}


	function sendNotification(type,message,light){
		document.getElementById('notification').innerHTML=message

		document.getElementById('notification').classList.add(type)
		document.getElementById('notification').classList.forEach(function(value,index){
			if(value.slice(0,3) == "is-"){
				document.getElementById('notification').classList.remove(value)
			}

		})

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
