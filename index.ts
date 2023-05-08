import './index.scss';

export class SevenSegmentDisplay {
  Asegment = document.getElementsByClassName('display__segment A');
  Bsegment = document.getElementsByClassName('display__segment B');
  Csegment = document.getElementsByClassName('display__segment C');
  Dsegment = document.getElementsByClassName('display__segment D');
  Esegment = document.getElementsByClassName('display__segment E');
  Fsegment = document.getElementsByClassName('display__segment F');
  Gsegment = document.getElementsByClassName('display__segment G');
  regexValidator = '[0-9]';
  textContent = document.getElementById('number') as HTMLInputElement;
  constructor() {
    let button = document.getElementById('btn');
    button.addEventListener('click', () => this.save());
  }
  

  arraySplit() {
    const textArray = [];
    textArray.push(this.textContent.value);
    const splitArray = textArray[0].split("")
    return splitArray;
  }

  save(): void {
    
    const numberValue = this.arraySplit();  
    console.log(numberValue[0])
    if(this.textContent.value.match(this.regexValidator)){
      if (numberValue[0] === '1') {
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
      } else if (numberValue[0] === '2') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Esegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
      } else if (numberValue[0] === '3') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
      } else if (numberValue[0] === '4') {
        this.Fsegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
      } else if (numberValue[0] === '5') {
        this.Asegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
      } else if (numberValue[0] === '6') {
        this.Asegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Esegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
      } else if (numberValue[0] === '7') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
      } else if (numberValue[0] === '8') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
        this.Esegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
      } else if (numberValue[0] === '9') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
      }
      if (numberValue[1] === '1') {
        this.Bsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
      } else if (numberValue[1] === '2') {
        this.Asegment[1].classList.add('red');
        this.Bsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
        this.Esegment[1].classList.add('red');
        this.Dsegment[1].classList.add('red');
      } else if (numberValue[1] === '3') {
        this.Asegment[1].classList.add('red');
        this.Bsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
        this.Dsegment[1].classList.add('red');
      } else if (numberValue[1] === '4') {
        this.Fsegment[1].classList.add('red');
        this.Bsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
      } else if (numberValue[1] === '5') {
        this.Asegment[1].classList.add('red');
        this.Fsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
        this.Dsegment[1].classList.add('red');
      } else if (numberValue[1] === '6') {
        this.Asegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
        this.Fsegment[1].classList.add('red');
        this.Esegment[1].classList.add('red');
        this.Dsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
      } else if (numberValue[1] === '7') {
        this.Asegment[1].classList.add('red');
        this.Bsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
      } else if (numberValue[1] === '8') {
        this.Asegment[1].classList.add('red');
        this.Bsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
        this.Dsegment[1].classList.add('red');
        this.Esegment[1].classList.add('red');
        this.Fsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
      } else if (numberValue[1] === '9') {
        this.Asegment[1].classList.add('red');
        this.Bsegment[1].classList.add('red');
        this.Csegment[1].classList.add('red');
        this.Dsegment[1].classList.add('red');
        this.Fsegment[1].classList.add('red');
        this.Gsegment[1].classList.add('red');
      }
    } else {
      const error = document.getElementsByClassName('none-active-error');
      error[0].classList.add('active-error');
      error[0].classList.remove('none-active-error');
      console.log(error)
    }
    setTimeout(() => {
      location.reload();
    }, 1000)
  }
}

const example = new SevenSegmentDisplay();
