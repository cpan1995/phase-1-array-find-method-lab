function superbowlWin(superBowlArray){
   let newValue= superBowlArray.find((element) => {
       if(element.result == ('W')){
           return element.year;
       }
       else{
           return null;
       }
   })
   if (newValue!=null){
       return newValue.year
   }
   else{
       return undefined;
   }
}
