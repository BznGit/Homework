function calc_y(x){
	y = 1/x + Math.sqrt(x);
	return y;	
}

describe("Тестирование математической функции", function(){
    let msg = "Позитивный тест: x = 1";
    it(msg, function(){
        let rez = calc_y(1);
        expect(rez).toBe(2);
    });
	let msg2 = "Негативный тест: x < 0";
    it(msg2, function(){
        let rez = calc_y(-1);
        expect(rez).toBe(NaN);
    });
    let msg3 = "Негативный тест: x = 0";
    it(msg3, function(){
        let rez = calc_y(0);
        expect(rez).toBe(Infinity);
    });
});