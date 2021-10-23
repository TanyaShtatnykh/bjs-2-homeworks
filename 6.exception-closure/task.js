function parseCount(parsedNum) {
	let num = Number.parseInt(parsedNum);
	if (isNaN(num)) {
		throw new Error('Невалидное значение');
	} else {
		return num;
	}
}

function validateCount(parsedNum) {
	try {
		return parseCount(parsedNum);
	} catch (err) {
		return err;
	}
	return Error('Невалидное значение');
}

class Triangle {
	constructor (a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error ('Треугольник с такими сторонами не существует');
		}
	}
	getPerimeter () {
		let perimeter = this.a + this.b + this.c;
		return perimeter;
	}
	getArea () {
		let p = this.getPerimeter() / 2;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
	}
}

function getTriangle (a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			getArea: () => {
				return 'Ошибка! Треугольник не существует'
			},
			getPerimeter: () => {
				return 'Ошибка! Треугольник не существует'
			}
		}
	}
}
