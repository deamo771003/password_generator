function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '~!@#$%^&*()_+{}:"<>?-=[];,./'

  const options = {
    length: '12',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '04'
  }
  console.log('options', options)
  // create a collection to store things user picked up

  // remove things user do not need

  // start generate password

  //return password

}

generatePassword()