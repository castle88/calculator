const all = document.querySelectorAll('.num')
const opp = document.querySelectorAll('.opp')
const equals = document.querySelector('.equal')
const display = document.querySelector('.display')
const decimal = document.querySelector('.decimal')
let calc = []

/* ************ display input numbers ************ */

all.forEach(x=>{
	x.addEventListener('click', ()=>{
		display.innerText += x.innerText
	})
})

/* ************ push current display value and operator ************ */

opp.forEach(x=>{
	x.addEventListener('click', ()=>{
		calc.push(display.innerText)
		calc.push(x.innerText)
		display.innerText = ''
		})
})

/* ************ solve equation, display solution, clear data ************ */

equals.addEventListener('click', ()=>{
	calc.push(display.innerText)
	let magic = eval(calc.join(''))
	display.innerText = magic
	calc = []
})

/* ************ conditional to only allow 1 decimal point ************ */

decimal.addEventListener('click', ()=>{
	if(display.innerText.includes(decimal.innerText)){
		return;
	}else{
		display.innerText += decimal.innerText 
	}
})
/* ************ clear all data ************ */

let clr = ()=>{
	display.innerText = ''
	calc = []
}

/* ************ delete last character ************ */

let del = ()=>{
	display.innerText = display.innerText.slice(0,-1)
}