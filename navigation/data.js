let user = {};

const changeData = (newUser) => {
    user = newUser;
}


const calcSpo2 = (red,infrared)=>{
    red = red.filter((item,index)=>index<650);
    infrared = infrared.filter((item,index)=>index<650);
    const [minRed,maxRed] = [Math.min(...red),Math.max(...red)]
    const [minInfraRed,maxInfraRed] = [Math.min(...infrared),Math.max(...infrared)]

    const seuil = (maxRed+minRed)/2;

    let t1=0 , t2=0 ;

    for(let i=0 ; i < red.lenght ; i++){
        
        if( (red[i] > red[i-1]) && (red[i] > red[i+1])  ){
            t1 = t2;
            t2 = i

        }
    }

    

    const r = ((maxRed-minRed)/minRed)/((maxInfraRed-minInfraRed)/minInfraRed);
    const spo2 = 110-14*r
    return spo2.toFixed(2);
  }

export  {
    changeData,
    user,
    calcSpo2


}