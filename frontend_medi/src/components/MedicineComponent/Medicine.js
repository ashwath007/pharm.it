import React,{useEffect,useState} from 'react'
import './Medicine.css'
function Medicine(props) {
    const {medicine_in} = props.location.state;
     const [medicine, setmedicine] = useState();
     const [inp,setinp] = useState("");
    useEffect(() => {
       fetch(`http://localhost:8000/all/`+medicine_in)
       .then(response => {
        return response.json()
       }).then(data => {
            console.log(data[0])
           setmedicine(data[0]);
           setinp("");
           
       }).catch(err => {
           console.log(err);
       })
    console.log(medicine_in);
    }, [])


    const search = (e) => {
        console.log("search");
        e.preventDefault();
        fetch(`http://localhost:8000/all/`+inp)
       .then(response => {
           return response.json()
       }).then(data => {
           setmedicine(data.data);
           setinp("");
           console.log(data.data)
       }).catch(err => {
           console.log(err);
       })
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__brand">
                    <h3 className="company__brand">Pharm.it</h3>
                </div>
                <div className="navbar__buttons1">
                    <input type="text" className="medi__input1" placeholder="  Search medicine..." value={inp} onChange={(e) => setinp(e.target.value)}/>
                    <button className="product__button1" onClick={search}>Search</button>
                </div>
            </nav>
            <div className="display">

                {medicine ? (medicine.map(med => (
                     <div className="display__medicine" key={med.from}>
                     <div className="div__arrangment">
                         <h4 className="left__name">Name:</h4>
                         <h6 className="tabletname">{med.name}</h6>
                     </div>
                     <div className="div__arrangment">
                         <h4 className="left__name">CompanyName:</h4>
                         <h6 className="compname">   {med.company}</h6>
                     </div>
                     <div className="div__arrangment">
                         <h4 className="left__name">Website:</h4>
                         <h6 className="tabletname">   {med.url}</h6>
                     </div>
                     <div className="div__arrangment">
                         <h4 className="left__name">Price:</h4>
                         <h6 className="tabletname">   {med.price}</h6>
                     </div>
                     <a href={med.url} target="_blank"><button className="buybtn">Buy Now</button></a>
                 </div>
                ))):<h1> Loading...</h1>}
               
            </div>
           
        
        </div>
    )
}

export default Medicine
