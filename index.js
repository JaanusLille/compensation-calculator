function calculateChange(){
    var x = document.getElementById("income-input").value;
    var y = document.getElementById("days-input").value;
    var z = document.getElementById("tuberculosis-input").checked;

    if(z==false){
        if(y>182){
            y=0;
        }
    }else{
        if(y>240){
            y=0;
        }
    }

    var employerDays;
    var insuranceDays;

    if(x<=0){
        x=0;
        y=0;
    }
    if(y<=0){
        x=0;
        y=0;
    }

    x = ((x/100)*70);
    x = ((x/100)*80);

    if(y>3){
        x = (x/30);
    }else{
        x = 0;
    }

    if(y <= 3){
        employerDays = 0;
        insuranceDays = 0;
    }else if((y >= 4) && (8 >=y)){
        employerDays=y-3; 
        insuranceDays = 0;
    }else if(y >= 9){
        employerDays=5; 
        insuranceDays=y-8;
    }
    
    if(x%1==0){
        var euros = x.toFixed(0);
        var cents = "00";
        var comma = ",";
        var e = "€";
        var money = euros+ comma+ cents+ e;
    }else{
        var cents = (x%1).toFixed(2).slice(2);
        var euros = x.toFixed(0);
        var comma = ",";
        var e = "€";
        var money = euros+ comma+ cents+ e;
    }   
    
    var empComp = x * employerDays;
    var insComp = x * insuranceDays;

    if(empComp%1==0){
        var E_euros = empComp.toFixed(0);
        var E_cents = "00";
        var E_comma = ",";
        var E_e = "€";
        var employerCompensation = E_euros+ E_comma+ E_cents+ E_e;
    }else{
        var E_euros = empComp.toFixed(0);
        var E_cents = (empComp%1).toFixed(2).slice(2);
        var E_comma = ",";
        var E_e = "€";
        var employerCompensation = E_euros+ E_comma+ E_cents+ E_e;
    }

    if(insComp%1==0){
        var I_euros = insComp.toFixed(0);
        var I_cents = "00";
        var I_comma = ",";
        var I_e = "€";
        var insuranceCompensation = I_euros+ I_comma+ I_cents+ I_e;
    }else{
        var I_euros = insComp.toFixed(0);
        var I_cents = (insComp%1).toFixed(2).slice(2);
        var I_comma = ",";
        var I_e = "€";
        var insuranceCompensation = I_euros+ I_comma+ I_cents+ I_e;
    }

    var compTot = x * (insuranceDays + employerDays);

    if(compTot%1==0){
        var I_euros = compTot.toFixed(0);
        var I_cents = "00";
        var I_comma = ",";
        var I_e = "€";
        var compensationTotal = I_euros+ I_comma+ I_cents+ I_e;
    }else{
        var I_euros = compTot.toFixed(0);
        var I_cents = (compTot%1).toFixed(2).slice(2);
        var I_comma = ",";
        var I_e = "€";
        var compensationTotal = I_euros+ I_comma+ I_cents+ I_e;
    }

    document.getElementById("days-together").innerHTML = y;
    document.getElementById("compensation-total").innerHTML = compensationTotal;
    document.getElementById("compensation-employer").innerHTML = employerCompensation;
    document.getElementById("compensation-insurance").innerHTML = insuranceCompensation;
    document.getElementById("days-employer").innerHTML = employerDays;
    document.getElementById("days-insurance").innerHTML = insuranceDays;
    document.getElementById("daily-allowance-1").innerHTML = money;
    document.getElementById("daily-allowance-2").innerHTML = money;
}