
const fn = (...inputs) => {
	if (!inputs.every((firstVal) => Number.isNumber(firstVal)))
		return "All arguments must be numbers.";
	return inputs.reduce((firstVal, secondVal) => firstVal - secondVal);
}

fn(1, 2, 3); //> -4
fn(10, "B", 20); //> error All arguments must be numbers.

