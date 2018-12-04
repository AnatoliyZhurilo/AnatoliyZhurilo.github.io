;
class ClassRAT{
	constructor(){
		//has 4 methods: addClass, removeClass, toggle and controll;
		//add, remove and toggle receives object and one class;
		//CONTROLL receive object and task;
		//if task is "+" it adds multiple classes which is third and other args
		//(not receive array! only arguments one by one)
		//task = "-" accordingly Removes classes
		//if task isn't + or -, task is class to remove, and other is to add(that what RA means);
	}
			static isClass(cls){//uses inside;
				if(void 0 === cls) {console.error("need second argumet"); return false}
			}

	static addClass(object, cls){
		if(ClassRAT.isClass(cls))return false;
		let tempArr = []
		if(object.className !== ""){
			tempArr = object.className.split(" ");
		}
		if(tempArr.some(function(elem){return elem == cls})) return true;
		tempArr.push(cls);
		object.className = tempArr.join(" ");
		if(ClassRAT.isToggle == true) return false;
	}

	static reClass(object, cls){
		if(ClassRAT.isClass(cls))return false;
		let tempArr = object.className.split(" ");
		tempArr = tempArr.filter(function(word){
			return word != cls;
		});
		object.className = tempArr.join(" ");
	}

	static toggle(object, cls){
		ClassRAT.isToggle == true;
		if(ClassRAT.addClass(object, cls)){
			ClassRAT.reClass(object, cls);
		}
		ClassRAT.isToggle == false;
	}

	static controll(object, taskOrRemove, ...values){
		if(taskOrRemove == "-"){
			values.forEach(function(value){
				ClassRAT.reClass(object, value);
			})
			return;
		}else if(taskOrRemove == "+"){
			values.forEach(function(value){
				ClassRAT.addClass(object, value);
			})
			return;
		}else{
			ClassRAT.reClass(object, taskOrRemove);
			ClassRAT.addClass(object, values);
		}
	}
}
ClassRAT.isToggle = false;