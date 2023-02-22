function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '~!@#$%^&*()_+{}:"<>?-=[];,./'

  // define dummy data
  const options = {
    length: '12',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    symbols: 'on',
    excludeCharacters: '0'
  }

  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    // collection若包含excludeCharacters內的字串filter就不迭代放入collection
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }
  // console.log(collection)
  // start generate password
  // 依使用者需求數量隨機抓collection內資訊進某空間
  function Sample(collection) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
  }

  let outputPassword = ''
  for (let i = 1; i <= options.length; i++) {
    outputPassword += Sample(collection)
  }
  console.log(outputPassword)

  //return password

}

generatePassword()