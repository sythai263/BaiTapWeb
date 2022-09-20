

$("#form-calc").on("submit", function (e) {
	e.preventDefault();
	const a = Number.parseInt($("#thuaso1").val());
	const b = Number.parseInt($("#thuaso2").val());
	if (!a || !b) {
		alert("Nhập đủ 2 số mới tính được !");
		$("#ketqua").val('');
		return false;
	}
	const operator = $("#toantu option:selected").val();
	const result = calculator(a, b, operator);
	if (result) {
		$("#ketqua").val(result);
	} else {
		$("#ketqua").val('');
	}
});


function calculator(a, b, operator) {
	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			if (b === 0) {
				alert("Số chia phải khác 0!");
				return null;
			} else {
				return a / b;
			}
		case '^':
			return Math.pow(a, b);
	}
}
