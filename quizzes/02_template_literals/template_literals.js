 
 function interpolation() {
    // refactor this to a single template literal using interpolation
    // template literals use backticks instead of double/single quote
    // interpolation is done with ${variable}
    const greeting = 'Hello'
    const noun = 'Guys'
    return greeting.toUpperCase() + ', ' + noun + '!'
  }
  // console.log(interpolation())
 
 // Simple String Interpolation 
 const name = 'Navi';
 const num = 2;
 const sentence = `${Navi} needs ${num} chocolates`; // ES5 way sentence = name + 'needs' + num + 'Chocolates'
 //console.log(sentence);

// Template String render functions
   const keywords = ['map1', 'reduce1', 'filter1']
   function renderKeywords(keywords) {
       return `
       <ul>
           ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
       </ul>
       `;
   }

//console.log(renderKeywords(keywords));

// Template strings if loop
   const name = "Navi" || 'Bob';
   const isExpected = true;
   const text =  `${ isExpected ? `My Name is ${name}` : ''}`;

   //console.log(text);

// Template strings with multi line
  function multiline() {
    // refactor to a single template literal with multiple lines
    return ('\n' +
  '    this is on a new line\n' +
  '  ')
  }
  // console.log(multiline())

  function escaping() {
    // refactor to a single template literal with multiple lines
    return 'This is `code`\nand a new line'
  }
  // console.log(escaping())





  // SOLUTIONS ARE BELOW THIS LINE!

  function interpolationSOLUTION() {
    // refactor this to a single template literal using interpolation
    // template literals use backticks instead of double/single quote
    // interpolation is done with ${variable}
    const greeting = 'Hello'
    const noun = 'Guys'
    return `${greeting.toUpperCase()}, ${noun}!`
  }
  // console.log(interpolationSOLUTION())

  function multilineSOLUTION() {
    // refactor to a single template literal with multiple lines
    return (`
      this is on a new line
    `)
  }
  // console.log(multilineSOLUTION())
  
  function escapingSOLUTION() {
    // refactor to a single template literal with multiple lines
    return `This is \`code\`\nand a new line`
  }
  // console.log(escapingSOLUTION())