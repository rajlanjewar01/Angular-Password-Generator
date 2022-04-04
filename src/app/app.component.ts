import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";
  

  onChangeLength(value: string){
    const parseValue = parseInt(value); //convert input String value to Number

    //check if user enter any other character/string
    if(!isNaN(parseValue)){ 
      this.length = parseValue;
    }

  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumber(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbol(){
    this.includeSymbols = !this.includeSymbols;
  }


  generatePassword(){
    //possible valid charqacters for password generation
    const number = "1234567890";
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = "";

    /*if(isset) checkbox of include letter, number, symbol clicked then add/concatenate
    to validChars variable*/

    if(this.includeLetters){
      validChars += letter;
    }
    if(this.includeNumbers){
      validChars += number;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    //Next step to listen to user input for length of password 
    let generatedPass = "";
    for(let i = 0; i < this.length; i++){
      //take random character from generated validChar string
      const index = Math.floor(Math.random() * validChars.length); //Math.random() gives value of 0.00000000 if we multiply value to length 0.2432323*46   ==> return value 0-46 ==> Math.floor(32.23232323) => 32

      //Debug
      //abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*() - 47 letters (0-46)
      console.log(index); // gives random number (between 0-46)
      console.log(validChars[index]); // it will provide value presented of that index



      generatedPass += validChars[index]; //attach/concatenate with generatedPass variable
    }

    this.password = generatedPass;
  }
  


  
}
