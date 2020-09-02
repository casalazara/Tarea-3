function secret(numeros,encrypt,llave){
  if(encrypt==='decrypt')
    {
      llave *=-1
    }
  for (var numero in numeros)
    {
      numeros[numero] = numeros[numero]+llave;
    }
    return numeros;
}

alert(secret ([1, 2, 3, 1], 'encrypt', 1));
// [2, 3, 4, 2]

alert(secret ([2,3,4,2], 'decrypt', 1));
// [1,2,3,1]


mcd = (a,b) =>{ if (a==b) return a; else return mcd(Math.min(a,b),Math.abs(a-b));};
alert(mcd(10,15));
//5

alert(mcd(100,150));
//50

alert(mcd(52,78));
//26