export default function CharacterCard({name, gender, status, image, species, location}){
    return(
       <div className="card col-md-6 col-sm-12">
             <div className="row no-gutters">
                 <div className="col-4">
                     <img src={image} class="card-img" alt={name} />
                 </div>
                 <div className="col-6">
                     <div className="card-body">
                         <h5 className="card-title">{name}</h5>
                             <p className="card-text">Gender: {gender}</p>
                             <p className="card-text">Last Location: {location.name}</p>
                         <p className="card-text">Species: {species}</p>
                     </div>
                 </div>
                 <div className="col-2">
                 <h6 className="card-title">{status}</h6>
                 </div>
             </div>
        </div>
    )
}