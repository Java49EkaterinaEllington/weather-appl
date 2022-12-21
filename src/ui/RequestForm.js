import { showErrorMessage } from "./errorMessage.js";
export class DataForm {
    #formElement;
    #cityElement;
    #dateFromElement;
    #dateToElement;
    #hourFromElement;
    #hourToElement;
    #errorMessageElement;
    #dateFrom;
    #dateTo;
    #hourFrom;
    #hourTo

    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#cityElement = document.getElementById(params.idCity);
        this.#dateFromElement = document.getElementById(params.idDateFrom);
        this.#dateToElement = document.getElementById(params.idDateTo);
        this.#hourFromElement = document.getElementById(params.idHourFrom);
        this.#hourToElement = document.getElementById(params.idHourTo);
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);
        this.onChangeDateFrom();
        this.onChangeDateTo();
        this.onChangeHourFrom();
        this.onChangeHourTo();
    }
    addSubmitHandler(processFun) 
    {
        this.#formElement.addEventListener("submit", (event) => 
        {
            event.preventDefault();
            console.log("submitted");
            const request = {};
            request.city = this.#cityElement.value;
            request.dateFrom = this.#dateFromElement.value;
            request.dateTo = this.#dateToElement.value;
            request.hourFrom = this.#hourFromElement.value;
            request.hourTo = this.#hourToElement.value;
            console.log(request);
            processFun(request);
        })
    }

    onChangeDateFrom() 
    {
        this.#dateFromElement.addEventListener('change', (event) => 
        {
            const value = event.target.value;
            console.log('onChangeDateFrom', value, this.#dateTo);
            if (this.#dateTo && value > this.#dateTo) 
            {
                showErrorMessage(event.target, 'ERROR', this.#errorMessageElement);
            } else {
                this.#dateFrom = value;
            }
        })

    }
    
    onChangeDateTo()
     {
        this.#dateToElement.addEventListener('change', (event) => {
            const value = event.target.value;
            console.log('onChangeDateTo', value, this.#dateFrom);
            if (this.#dateFrom && value < this.#dateFrom) {
                showErrorMessage(event.target, 'ERROR', this.#errorMessageElement);
                
                this.#dateTo = value;
            }
        })
    }

    onChangeHourFrom() 
    {
        this.#hourFromElement.addEventListener('change', (event) =>
         {
            const value = +event.target.value;
            if (this.#hourTo && value > this.#hourTo) 
            {
                showErrorMessage(event.target, 'ERROR', this.#errorMessageElement);
              
            } else
             {
                this.#hourFrom = value;
            }
        })
    }

    onChangeHourTo() 
    {
        this.#hourToElement.addEventListener('change', (event) => 
        {
            const value = +event.target.value;
            if (this.#hourFrom && value < this.#hourFrom)
             {
                showErrorMessage(event.target, 'ERROR', this.#errorMessageElement);
    
            } else 
            {
                this.#hourTo = value;
            }
        })
    }

}