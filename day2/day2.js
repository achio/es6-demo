function Fun(){
	this.name = "Fun";
	this.func = () => console.log(this.name);
}
var newObj = new Fun();
newObj.func();

function Foo(name,id){
	this.name = name;
	this.id = id;
	// this[name + id] = name + id;
}
var newFoo = new Foo('es',6);
const arr = [1,2,3];
for(const prop of arr){
	console.log(prop);
}

function getStatus(){
	return{
		error:null,
		logined:true,
		user:{
			id: "1000",
			usrName : "beck"
		}
	}
}
const { error, logined, user} = getStatus();