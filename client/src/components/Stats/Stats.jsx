import "./Stats.css";

function Stats() {

const data = [

{
number:"10K+",
text:"Healthy Users"
},

{
number:"25K+",
text:"Meal Plans"
},

{
number:"98%",
text:"Success Rate"
},

{
number:"24/7",
text:"Support"
}

];

return(

<div className="stats">

{

data.map((item,index)=>(

<div
className="stat-card"
key={index}
>

<h2>{item.number}</h2>

<p>{item.text}</p>

</div>

))

}

</div>

);

}

export default Stats;