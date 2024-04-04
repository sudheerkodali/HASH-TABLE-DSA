
const map = new MAP();

map.set( 'Apple IPhone 11', 50000)
map.set('Samsung Fold', 10000)

console.log(map.get('Samsung Fold'));
//map.delete('samsung fold');

//console.log('Size of the method = ${map.size}')
//map.delete('Apple IPhone 11');

//console.log('has IPhone = ' + map.has('Apple IPhone 11'))

map.forEach((val, key) => {
   console.log('key = ${key} and value = ${val}')
  })

    

