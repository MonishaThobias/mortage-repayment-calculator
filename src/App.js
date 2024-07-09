import React,{Component} from 'react';
import iconcalculator from './app/images/icon-calculator.svg';
import illustrator from './app/images/illustration-empty.svg';
import './app/css/style.css';

class App extends Component {
  constructor(props){
    super(props);
    //Initialize State 
    this.state ={ 
      mortageAmount :'',
      mortageTerm : '',
      mortageRate : '',
      selectedOption:'',
      validationErrors:{}, 
      submitted:0,
      isFormSubmitted:false, 
      monthlyRepayment:null,
      totalRepayment:null 


   }

   this.handleOnchange=this.handleOnchange.bind(this)
   this.onEventValueChange=this.onEventValueChange.bind(this)
   this.clearAll=this.clearAll.bind(this)
   this.validateFields=this.validateFields.bind(this)
   this.handleOnSubmit=this.handleOnSubmit.bind(this)
   this.calculateMonthlyPayment=this.calculateMonthlyPayment.bind(this)
    this.handleOnMouseEnter=this.handleOnMouseEnter.bind(this) 
    this.handleOnMouseLeave=this.handleOnMouseLeave.bind(this)
    this.handleOnMouseEnterTerm=this.handleOnMouseEnterTerm.bind(this) 
    this.handleOnMouseLeaveTerm=this.handleOnMouseLeaveTerm.bind(this)
    this.handleOnMouseEnterRate=this.handleOnMouseEnterRate.bind(this) 
    this.handleOnMouseLeaveRate=this.handleOnMouseLeaveRate.bind(this)
   
  }

clearAll() {
    window.location.reload(false);
  }
 
  handleOnchange(e){ 
    console.log(e);
    const target = e.target
  const mortageAmount = target.name  
  const mortageTerm = target.name
  const mortageRate = target.name   
  const value = target.value  

  switch(target.name){
  case "mortageAmount":
    return(
      this.setState({
        [ mortageAmount ] : value
       })
    );
    

    case "mortageTerm":
    return(
      this.setState({
        [ mortageTerm ] : value
       })
    );
    

    case "mortageRate":
    return(
      this.setState({
        [ mortageRate ] : value
       })
    );
   
    default: return e;
 
  }
  }
 
onEventValueChange(e){
  this.setState(
      {
        selectedOption: e.target.value
      }
    )
  

}  

handleOnSubmit(e){
  e.preventDefault();
  const isFormValid=this.validateFields(); 
  if(isFormValid){
   console.log(this.state.selectedOption);
    this.setState( (state)=>
      { 
        return{
         submitted:state.submitted+1, 
         isFormSubmitted:true,
         
        }
      }
    )
  } 

 
} 

calculateMonthlyPayment(){
  const{mortageAmount,mortageTerm,mortageRate,monthlyRepayment}=this.state;
  const isFormValid=this.validateFields();

  if(isFormValid){
    const p = parseFloat(mortageAmount);
    const r = parseFloat(mortageRate) / 100 / 12;
    const n = parseFloat(mortageTerm)*12;
    const numerator = p*r*Math.pow(1+r,n);
    const denominator = Math.pow(1+r,n)-1;
    const resultMonthlyRepayment = (numerator/denominator).toFixed(2);
    const resultTotalRepayment = (monthlyRepayment*12).toFixed(2);

 this.setState({
  monthlyRepayment:resultMonthlyRepayment,
  totalRepayment:resultTotalRepayment
 })
  }
}

validateFields(){
  const{ mortageAmount,mortageTerm,mortageRate,selectedOption} = this.state ;
  const errors ={}

  if(!mortageAmount){
    errors['mortageAmount']= 'This field is required';
  }
  if(!mortageTerm){ 
    errors['mortageTerm']='This field is required';
  }
  if(!mortageRate){ 
    errors['mortageRate']='This field is required';
  } 
  if(!selectedOption){
    errors['selectedOption']='This field is required';
  }
  this.setState({
    validationErrors:errors
  })
return Object.keys(errors).length===0

} 
 
handleOnMouseEnter(){ 
  /* console.log("onMouseOverCapture Event!");  */
 const inputWithIcon=document.querySelector('#input-with-icon');
 const span=document.querySelector('span');
  const inputField=document.querySelector('.inputfield'); 
 if(inputWithIcon){ 
  span.style.backgroundColor = "hsl(61, 70%, 52%)";
  inputField.style.border = "1px solid hsl(200, 24%, 40%)"
 }
 }    
 handleOnMouseLeave(){ 
  /* console.log("onMouseOverCapture Event!");  */
 const inputWithIcon=document.querySelector('#input-with-icon');
 const span=document.querySelector('span');
  const inputField=document.querySelector('.inputfield'); 
 if(inputWithIcon){ 
  span.style.backgroundColor = "hsl(202, 86%, 94%)";
  inputField.style.border = "1px solid hsl(203, 41%, 72%)"
 }
 }  

 handleOnMouseEnterTerm(){ 
  /* console.log("onMouseOverCapture Event!");  */
 const inputWithIcon=document.querySelector('#input-with-icon-term');
 const span=document.querySelector('#spanClass'); 
  const inputField=document.querySelector('#mortage-term'); 
 if(inputWithIcon){   
  span.style.backgroundColor = "hsl(61, 70%, 52%)";
  inputField.style.border = "1px solid hsl(200, 24%, 40%)"
 }
 }    
 handleOnMouseLeaveTerm(){ 
  /* console.log("onMouseOverCapture Event!");  */
 const inputWithIcon=document.querySelector('#input-with-icon-term');
 const span=document.querySelector('#spanClass'); 
  const inputField=document.querySelector('#mortage-term'); 
 if(inputWithIcon){ 
  span.style.backgroundColor = "hsl(202, 86%, 94%)"; 
  inputField.style.border = "1px solid hsl(203, 41%, 72%)"
 }
 }  


 handleOnMouseEnterRate(){ 
  /* console.log("onMouseOverCapture Event!");  */
 const inputWithIcon=document.querySelector('#input-with-icon');
 const spanField1=document.querySelector('#spanClass1');
  const inputField2=document.querySelector('#interest-rate'); 
 if(inputWithIcon){ 
  spanField1.style.backgroundColor = "hsl(61, 70%, 52%)";
  inputField2.style.border = "1px solid hsl(200, 24%, 40%)"
 }
 }    
 handleOnMouseLeaveRate(){ 
  /* console.log("onMouseOverCapture Event!");  */
 const inputWithIcon=document.querySelector('#input-with-icon');
 const spanField1=document.querySelector('#spanClass1');
  const inputField2=document.querySelector('#interest-rate');  
 if(inputWithIcon){ 
  spanField1.style.backgroundColor = "hsl(202, 86%, 94%)";
  inputField2.style.border = "1px solid hsl(203, 41%, 72%)"
 }
 }  



render(){  

  const{mortageAmount,mortageRate,mortageTerm,isFormSubmitted,monthlyRepayment,totalRepayment} = this.state;
  const{ 
    mortageAmount:mortageAmountError,
    mortageRate:mortageRateError,
    mortageTerm:mortageTermError,
    selectedOption:selectedOptionError }= this.state.validationErrors
  return(
    <>
    <section className="container container--pall flex desktop-empty-design">
        <div className="mortage-calculator">
            <div className="mortage-head mortage-head-jc-sb">
            <h2>Mortgage Calculator</h2>
            <a href="/" onClick={this.clearAll}>Clear All</a>
        </div>
        <form onSubmit={this.handleOnSubmit}> 
            
            <p>Mortgage Amount</p>
            <div className="input-with-icon" id='input-with-icon'
            onMouseOver={this.handleOnMouseEnter}  onMouseLeave={this.handleOnMouseLeave}>
            <span>&#8356;</span> 
<input type="number" name="mortageAmount" className="inputfield" id="mortage-amount" 
 value={mortageAmount} onChange={this.handleOnchange} />
   <p className='error'>{mortageAmountError} </p>  
            </div>
             <br />
             <div className="mortage-term-rate jc-sb">
             <div className="mortage-term">
             <p>Mortgage Term</p> 
             <div className="input-with-icon" id='input-with-icon-term'
             onMouseOver={this.handleOnMouseEnterTerm}  onMouseLeave={this.handleOnMouseLeaveTerm}>
             <input type="number" name="mortageTerm" className="inputfield" id="mortage-term" 
             value={mortageTerm} onChange={this.handleOnchange} /> 
             <span className="right-icon" id='spanClass'> Years </span>
             <p className='error'>{mortageTermError}</p>
        </div>
    </div> 
    <div className="mortage-rates">
            <p>Interest Rate</p> 
            <div className="input-with-icon" id='input-with-icon2'
            onMouseOver={this.handleOnMouseEnterRate}  onMouseLeave={this.handleOnMouseLeaveRate}>
           <input type="number" name="mortageRate" className="inputfield" id="interest-rate" 
           value={mortageRate} onChange={this.handleOnchange}/> 
            <span className="right-icon" id='spanClass1'> % </span>
           <p className='error'>{mortageRateError}</p>
         </div>
    </div>
</div> 
    <div className="input-radio"  id='input-with-icon3'>
           <p>Mortgage Type</p> 
           <div className="mortage-repayments">
            <input type="radio" name="mortageType" value="Repayment" id="repayment"
             checked={this.state.selectedOption === "Repayment"} 
             onChange={this.onEventValueChange} /> 
            <span><strong>Repayment</strong></span>
        </div>
            <br/>
            <div className="mortage-repayments">
            <input type="radio" name="mortageType" value="Interest Only" id="interest-only"  
            checked={this.state.selectedOption === "Interest Only"}
             onChange={this.onEventValueChange}  /> 
            <span><strong>Interest Only</strong></span>
            </div> 
            <p className='error'>{selectedOptionError}</p>
        </div>
        <br/><br/>
        
           <button className="button" type="submit" onClick={this.calculateMonthlyPayment}> 
            <img src={iconcalculator} alt="Icon Calculator" />
            <span><strong> &nbsp;&nbsp; Calculate Repayments</strong></span></button> 
        </form>   
        </div>
       
        <div className="mortage-results mortage-results-ai-c " style={isFormSubmitted ? {display:'none'}:{display:'block'}}>
<img src={illustrator} alt="Illustration Empty"/>
<h3>Results shown here</h3>
<p>Complete the form and click “calculate repayments” to see what 
    your monthly repayments would be.</p>
        </div>
       
          <div className="mortage-completed-results mortage-results-ai-c" style={isFormSubmitted ? {display:'block'}:{display:'none'}}>
            <h3>Your results</h3>
            <p>
                Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.
            </p> 
<div className="showing-result">
    <p>Your monthly repayments</p>
    <h1>&#8356; &nbsp;{monthlyRepayment}</h1>

    <hr />
    <p className="showing-result-total">Total you'll repay over the term</p>
    <h3>&#8356; &nbsp;{totalRepayment}</h3>
</div>
</div>

    </section>
    </>
  );
}

}

export default App;
