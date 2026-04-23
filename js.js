const btn= document.getElementById("mybut")
const namefaildt=document.getElementById("namefaild")
const snfaild=document.getElementById("srialnumfaild")
const Ed=document.getElementById("#Expdate")
const com=document.getElementById("comfer")
const apf=document.getElementById("appform")
const card=document.getElementById("card")
const en=document.getElementById("errorname")
const mf=document.getElementById("mainform/")
const enu=document.getElementById("errornumber")
const m=document.getElementById("mounth")
const y =document.getElementById("year")
const dm=document.getElementById("errordete")
    const cvc=document.getElementById("cvc")
    const p4=document.getElementById("p4")
    const ps=document.getElementById("p1")

const pn=document.getElementById("p2")
const pv=document.getElementById("p3")

const year=2000+y.value
  const mounth=m.value
 const enterdate=new Date(year,mounth)

  const Expierdate=document.getElementById("Expierdate")
function datevalid(enterdate){
  const now = new Date();
  const carrm=now.getMonth()
    const carry=now.getFullYear()
  const totalNow = carry * 12 + carrm;
    const totalExp = year * 12 + mounth;
    if(((totalExp - totalNow)/30)>12){
      return true
      console.log(((totalExp - totalNow)/30)>12)
    }else{
         return false
    }
}


btn.addEventListener("click",()=>{
        if(namefaildt.value===""||namefaildt.value==null ){
            en.innerHTML="<p>name is Requierd</p>"
        } else if(snfaild.value===""||snfaild.value==null||snfaild.value.length>14||snfaild.value.length<14){
         enu.innerHTML="<p>Card srial number is Requierd enter your 14 digit </p>"
        } else if(m.value===""||m.value==null|| parseInt(m.value)<1|| parseInt(m.value)>12){
         dm.innerHTML="<p>Enter Dete please</p>"
        } else if(y.value===""||y.value==null ){
         dm.innerHTML="<p>Enter year</p>"}
         else if(cvc.value===""||cvc.value==null ){
         dm.innerHTML="<p>Enter cvc</p>"
        }else if(datevalid(enterdate)){
            Expierdate.innerText="your Card is expierd"        

        }else{
            swit()
         }}
)

function swit(){
    apf.classList.add("active")
    com.classList.remove("active")

}

 namefaildt.addEventListener("input",()=>{
        pn.innerText=namefaildt.value;
 })

 snfaild.addEventListener("input",()=>{
    ps.innerText=snfaild.value
 })
y.addEventListener("input",()=>{
    if(parseInt(m.value)>12){
      dm.innerText="valid input"
    }else{
    if(parseInt(m.value)<10){
        pv.innerText=`0${m.value}/${y.value}`}
        else{
        pv.innerText=`${m.value}/${y.value}`}
    }})

  cvc.addEventListener("input",()=>{
        p4.innerText=cvc.value
  }
  )  


    
