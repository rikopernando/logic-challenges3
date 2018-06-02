// Soal Pertama => Logic Challenge - Mencari Mean

var cariMean = (arr) => {

	var hasilPertambahan = 0
	for (var i = 0; i < arr.length; i++) {
		hasilPertambahan += arr[i]
	}
	return Math.round(hasilPertambahan / arr.length)
}

console.log(`Soal Pertama => Logic Challenge - Mencari Mean`)
console.log(cariMean([1, 2, 3, 4, 5])) // 3
console.log(cariMean([3, 5, 7, 5, 3])) // 5
console.log(cariMean([6, 5, 4, 7, 3])) // 5
console.log(cariMean([1, 3, 3])) // 2
console.log(cariMean([7, 7, 7, 7, 7])) // 7
console.log()

// Soal Kedua => Logic Challenge - Perkalian Unik

var perkalianUnik = (arr) => {

	var array = []
	var totalKali = 1
	for (var i = 0; i < arr.length; i++) {
		totalKali *= arr[i] 
	}

	for (var j = 0; j < arr.length; j++) {
		var hasil = totalKali / arr[j]
		array.push(hasil)
	}
	return array
}

console.log(`Soal Kedua => Logic Challenge - Perkalian Unik`)
console.log(perkalianUnik([2, 4, 6]))// [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5]))// [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5]))// [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1]))// [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2]))// [160, 320, 40, 32, 160]
console.log()

// Soal KeTiga => Logic Challenge - Tentukan Deret Aritmatika

var tentukanDeretAritmatika = (arr) => {

	var kelipatan = arr[0]
	var simpanAngka = 0
	var hasil = true
	for (var j = 0; j < arr.length; j++) {

		if ((arr[j] - simpanAngka) == kelipatan) {
			simpanAngka = arr[j]
		}else{
			hasil = false
			break
		}
		
	}
	return hasil

}

console.log(`Soal KeTiga => Logic Challenge - Tentukan Deret Aritmatika`)
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])) // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])) // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])) // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])) // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])) // false
console.log()

// Soal Ke Empat => Logic Challenge - Tentukan Deret Geometri

var tentukanDeretGeometri = (arr) => {
	
	var kelipatan = arr[0]
	var hasil = true
	var simpanAngka = 0
	for (var j = 1; j < arr.length; j++) {

		if (j == 1) {
			kelipatan = arr[j] / kelipatan
			simpanAngka = arr[j]
		}else{

			if ((simpanAngka * kelipatan) == arr[j]) {
				simpanAngka = arr[j]
			}else{
				hasil = false
				break
			}

		}
		
	}
	return hasil
}

console.log(`Soal Ke Empat => Logic Challenge - Tentukan Deret Geometri`)
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
