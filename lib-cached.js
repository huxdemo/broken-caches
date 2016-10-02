window.Lib = function(){
	return false
}

console.log(document.body.innerHTML)
document.body.innerHTML += (
	"<p>" +
	"Im a JS library and Im cached with 10min." +
	"<br/>" +
	"I put a function Lib into Global which has value: " + Lib() +
	"</p>"
)

