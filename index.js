function* createIdGenerator() {
    let id = 1
  
    while (0 <= id){
      yield id++
    }
  }
  console.log('createIdGenerator()')
  const idGenerator = createIdGenerator();
  console.log(idGenerator.next().value)
  console.log(idGenerator.next().value)
  console.log(idGenerator.next().value)
  console.log(idGenerator.next().value)
  console.log(idGenerator.next().value)
  console.log(idGenerator.next().value)
  
  
  function* newFontGenerator(size) {
    let currentSize = size;
    
    while (true){
      let action = currentSize
      let fontSize = yield currentSize
  
      if(fontSize === 'up') {
        currentSize = action + 2 
      }
      
      if(fontSize === 'down') {
        currentSize = action - 2 
      }
    }
  }
  
  const fontGenerator = newFontGenerator(14);
  
  console.log('newFontGenerator(14)')
  console.log(fontGenerator.next('up').value)
  console.log(fontGenerator.next('up').value)
  console.log(fontGenerator.next('up').value)
  console.log(fontGenerator.next().value)
  console.log(fontGenerator.next('down').value)
  console.log(fontGenerator.next('down').value)
  console.log(fontGenerator.next('down').value)
  console.log(fontGenerator.next().value)