 
 // Simple String Interpolation 
 // refactor this to a single template literal using interpolation
    // template literals use backticks instead of double/single quote
    // interpolation is done with ${variable}
 const name = 'Navi';
 const num = 2;
 const sentence = `${name.toUpperCase()} needs ${num} Chocolates`
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
   const name = "Navi";
   const isExpected = true;
   const text =  `My Name is ${ isExpected ? name : 'Bob'}`;

   //console.log(text);

// Template strings with multi line
  function multiline() {
    // refactor to a single template literal with multiple lines
    return (`
      this is on a new line
  `)
  }
  // console.log(multiline())

  function escaping() {
    // Refactor to add support for back ticks in strings
    return `This is \`code\`\nand a new line`
  }
  // console.log(escaping())





  // SOLUTIONS ARE BELOW THIS LINE!

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