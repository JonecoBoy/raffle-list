// let objects = JSON.parse(localStorage.getItem["list1"]) : []

let lists = JSON.parse(localStorage.getItem("lists"))
// let lists = [
// 	{name: 'lista1', 
// 	 description: 'desc1',
// 	 list: [{name: 'name1' , weight: 'weight1' , group: 'group1'},{name: 'name1' , weight: 'weight1' , group: 'group1'}]
// 	},
// 	{name: 'lista2', 
// 	description: 'desc2',
// 	list: []
//    },
//    {name: 'lista3', 
//    description: 'desc3',
//    list: []
//   }
// ]

!lists ? lists=[] : 

renderTable(lists)


function renderTable(lists){
	let body = document.getElementById("table-lists").getElementsByTagName("tbody")[0]
	
	let html = "";
	lists.forEach(function(value,index)
	{
		index = index+1;
		html +=  "<tr id=tr"+index+" onMouseOver='colorSelected(event.type,this.id)' onMouseOut='colorSelected(event.type,this.id)'>" +
				"<td>"+ index +"</td>" +
				"<td>"+value.name+"</td>" +
				"<td>"+value.description+"</td>" +
				"<td>" +
				"<div class='buttons'>" +
				"<button class='button is-info is-small is-light' onclick=editObject('"+index+"')>edit</button>" +
				"<button class='button is-danger is-small is-light' onclick=deleteObject('"+index+"')>delete</button>" +
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
		
		let description = document.getElementById("description").value
		
		lists.push({name: name, description: description,list:[]})

		renderTable(lists)

		document.getElementById('modal').classList.remove('is-active');
		sendNotification('is-success', name + ' added',true)
		saveList()
	}

	function deleteObject(row)
	{

		var confirmButton = document.createElement("div")
		confirmButton.id = 'confirmButton'
		confirmButton.class = 'sticky'
		confirmButton.innerHTML = '<div class="dropdown is-hoverable is-small">'+
		'<div class="dropdown-trigger">'+
		  '<button class="button is-small" aria-haspopup="true" aria-controls="dropdown-menu3">'+
		  '<span>Confirm</span>'+
			'<span class="icon is-small">'+
			'<i class="fas fa-angle-down" aria-hidden="true"></i>'+
			  '</span>'+
			'</button>'+
		  '</div>'+
		'<div class="dropdown-menu" id="dropdown-menu3" role="menu">'+
		  '<div class="dropdown-content is-small p-1">'+
		  '<div class="dropdown-item is-small p-1" style="">'+
			'<a href="#" class="dropdown-item is-small" onclick="confirmDeleteObject('+row+')">yes</a>'+
			  '</div>'+
			'</div>'+
			'<div class="dropdown-content is-small p-1">'+
		  '<div class="dropdown-item is-small p-1">'+
		  '<a href="#" class="dropdown-item is-small centered" onclick="cancelDelteObject()">no</a>'+
			  '</div>'+
			'</div>'+
		  '</div>'+
	  '</div>'

	//   avoid creating more than one button
	  if(document.getElementById('confirmButton')){
	  var botao = document.getElementById('confirmButton')
	  botao.parentNode.removeChild(botao)
	  }
		document.getElementById("tr"+row).getElementsByClassName('buttons')[0].appendChild (confirmButton)
		
	}

	function cancelDelteObject(){
		var botao = document.getElementById('confirmButton')
		botao.parentNode.removeChild(botao)
	}

	function confirmDeleteObject(row){
		var botao = document.getElementById('confirmButton')
		botao.parentNode.removeChild(botao)
		row = parseInt(row-1)
		
		let deleteObject = lists[row]
		lists.splice(row,1)
		console.log(deleteObject)
		renderTable(lists)
		document.getElementById('modal').classList.remove('is-active');
		sendNotification('is-warning',deleteObject.name +' removed',true)
		saveList()
	}

	function deleteList()
	{
		lists = [];
	   renderTable(lists)
	   closeModal()
	   sendNotification('is-danger','Lists deleted',false)
		
		
	}

	function saveList()
	{
		localStorage.setItem('lists', JSON.stringify(lists))
		document.getElementById('modal').classList.remove('is-active');
		//sendNotification('is-success','List Saved',false)
		
	}


	function editObject (row){
		let tr = document.getElementById('tr'+row)
		data = []


		tr.childNodes.forEach(function(value,index){
			if(index!=0){
			if (index <3){
				data [index] = value.innerHTML
			value.innerHTML= '<input class="input is-small" type="text" placeholder="Small input" value ="'+value.innerHTML+'">'
			}

			else{
				value.innerHTML="<div class='buttons'>" + 				
								"<button class='button is-primary is-small is-light' onclick=confirmEditObject('"+row+"')>Confirm</button>" +
								"<button class='button is-warning is-small is-light' onclick=cancelEditObject()>Cancel</button>" +
								"</div>"
			}
		}
		})
	}

	function confirmEditObject(row){
		
		tr = document.getElementById("tr"+row)
		row = row-1
		console.log(tr)
		let name = tr.getElementsByTagName("input")[0].value
		let description = tr.getElementsByTagName("input")[1].value

		lists[row].name = name
		lists[row].description = description
		renderTable(lists)
		sendNotification('is-success','teste Saved',true)
		saveList()
	}


	function cancelEditObject(data)
	{
		renderTable(lists)
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
			case 'buttonSaveList':

				document.getElementById('modal-title').innerHTML = 'Save All Records?'
				document.getElementById('modal-content').innerHTML = 'Are You Sure that you wish to Overwrite all data in the list?'
				document.getElementById('modal-save-button').innerHTML = 'Save'
				
				document.getElementById('modal-save-button').classList.add('is-primary')
				document.getElementById('modal-save-button').classList.add('buttonSaveList')
				break;
			default:

				break;
		}

	}

	function saveModal()
	{

		let saveButton = document.getElementById('modal-save-button').innerHTML

		switch (saveButton) {
			case 'Erase':
				deleteList()
				break;

			case 'Save':
				saveList()
				break;
		
			default:
				break;
		}

	}


	function closeModal()
	{
		document.getElementById('modal').classList.remove('is-active');

	}


	function sendNotification(type,message,light){
		document.getElementById('notification').innerHTML='<button class="delete" onClick="closeNotification()"></button>' + message
			
		document.getElementById('notification').classList.remove('is-hidden')
		document.getElementById('notification').classList.forEach(function(value,index){
			if(value.slice(0,3) == "is-"){
				document.getElementById('notification').classList.remove(value)
				
			}
		})
		document.getElementById('notification').classList.add(type)
		light==true ? document.getElementById('notification').classList.add("is-light") : document.getElementById('notification').classList.remove("is-light")
		setTimeout(closeNotification, 3000)
	}

	function closeNotification(){
		document.getElementById('notification').classList.forEach(function(value,index){
			if(value.slice(0,3) == "is-"){
				document.getElementById('notification').classList.remove(value)
				
			}
		})
		
		document.getElementById('notification').classList.add('is-hidden')
		
	}
