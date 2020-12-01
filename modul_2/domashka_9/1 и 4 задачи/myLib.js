;!function(){
	window.myArr = {
		min: function(arr){
			let min = arr[0];
			for (let i =0; i < arr.length; i++){
				if (min > arr[i]) min = arr[i];
			}
			return min;
		},
		max: function(arr){
			let max = arr[0];
			for (let i =0; i < arr.length; i++){
				if (max > arr[i]) min = arr[i];
			}
			return max;
		},
		average: function(arr){
			let sum = 0;
			for (let i = 0; i < arr.length; i++){
				sum = sum + arr[i];

			}
			console.log(sum);
			let srSum = sum/arr.length;
			return srSum;
		}
	};
}();

