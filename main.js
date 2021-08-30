const all = document.querySelectorAll('.num')
const opp = document.querySelectorAll('.opp')
const equals = document.querySelector('.equal')
const display = document.querySelector('.display')

let calc = []
let answer = []

all.forEach(x=>{
	x.addEventListener('click', ()=>{
		display.innerText += x.innerText
	})
})

opp.forEach(x=>{
	x.addEventListener('click', ()=>{
		calc.push(display.innerText)
		calc.push(x.innerText)
		display.innerText = ''
		})
})

equals.addEventListener('click', ()=>{
	calc.push(display.innerText)
	display.innerText = ''
	let magic = eval(calc.join(''))
	display.innerText = magic
	calc = []
	
})

let wipe = ()=>{
	display.innerText = ''
	calc = []
	answer = []
}