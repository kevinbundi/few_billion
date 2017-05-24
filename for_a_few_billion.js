function pennies(){
	var total_pennies = 1
	for(var i=2; i<=30; i++){
		total_pennies = (total_pennies*2)*0.01
	}
	console.log(total_pennies)
}
pennies()


// day 1 = 1
// day 2 = 2
// day 3 = 2*2