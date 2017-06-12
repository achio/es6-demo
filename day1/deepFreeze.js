(function(){
	Object.prototype.deepFreeze = function(obj){
		let propNames = Object.getOwnPropertyNames(obj);
		propNames.forEach(function(name){
			let prop = obj[name];
			if(typeof prop == 'object' && prop !== null ){
				Object.deepFreeze(prop);
			}
		});
		return Object.freeze(obj);
	};

	const obj1 = {
		a : {
			b : {
				c : "test"
			}
		}
	};
	const obj2 = Object.deepFreeze(obj1);
	obj2.a.b.c = "name";
	console.log(obj2.a.b.c);
})();