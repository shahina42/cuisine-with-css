
const randomGernerate=()=>{
    let Random1=" ";
    for(let i=1;i<=5;i++){
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`).then((Random)=>{

        return Random.json();
    }).then((Randomdata)=>{
        // console.log(completedata.meals)
      
      
    
       Randomdata.meals.forEach((values) => {
        
        Random1+=`<div class="grid">
    
       <img src=${values.strMealThumb} alt="img">
       <p>${values.strMeal}</p>
    
    </div>`
        
     
       });
       document.querySelector(".grid-Random").innerHTML=Random1;
     
    
    
    }).catch((err)=>{
        console.log(err);
    })
    }
}



randomGernerate()




fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=lamb`).then((data)=>{

    return data.json();
}).then((completedata)=>{
    // console.log(completedata.meals)
   let data1=" ";
  const meals=completedata.meals.slice(5,10);
   meals.forEach((values) => {
    
    data1+=`<div class="grid">

   <img src=${values.strMealThumb} alt="img">
   <p>${values.strMeal}</p>

</div>`
    
   });
   document.querySelector(".grid-conatiner").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})



fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=lamb`).then((data)=>{

    return data.json();
}).then((completedata)=>{
    // console.log(completedata.meals)
   let data1=" ";
  const meals=completedata.meals.slice(5,10);
   meals.forEach((values) => {
    
    data1+=`<div class="grid">

   <img src=${values.strMealThumb} alt="img">
   <p>${values.strMeal}</p>

</div>`
    
   });
   document.querySelector(".grid-conatiner").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})






const latestMeals=(latest)=>{
    const categories={
        chicken:"https://themealdb.com/api/json/v1/1/filter.php?c=chicken",
        lamb:"https://themealdb.com/api/json/v1/1/filter.php?c=lamb",
        pork:"https://themealdb.com/api/json/v1/1/filter.php?c=pork",
        seafood:"https://themealdb.com/api/json/v1/1/filter.php?c=Seafood",
        beef:"https://themealdb.com/api/json/v1/1/filter.php?c=beef"
    }
    const Dishes=categories[latest.toLowerCase()];
    if(!Dishes){
        console.log("not applicable!")
        return
    }

    fetch(Dishes).then((items)=>{

    return items.json();
}).then((fulldata)=>{
    // console.log(completedata.meals)
   let displaLatest=" ";
  const meals=fulldata.meals.slice(5,10);
   meals.forEach((values) => {
    
    displaLatest+=`<div class="grid">

   <img src=${values.strMealThumb} alt="img">
   <p>${values.strMeal}</p>

</div>`
    
   });
   document.querySelector(".grid-conatiner").innerHTML=displaLatest;

}).catch((err)=>{
    console.log(err);
})

}

const srch=document.querySelector(".search_bar");
 

srch.addEventListener('input',(event)=>{
    const value=event.target.value.toLowerCase();
    console.log("readyyy")
    latestMeals(value);
})




const one_grid=document.querySelectorAll(".grid");
 
const btn=document.querySelector(".cross_btn");




btn.addEventListener("click",()=>{
    console.log("ok")
    document.querySelector(".pop-outer").style.display="none";
})

