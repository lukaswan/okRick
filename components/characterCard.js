import styles from "../styles/card.module.css";

export default function CharacterCard({name, gender, status, image, species, location}){
    return(
        <div className={`container col-md-6 col-sm-12 ${styles.container}`}>
            <div className={`card ${styles.card}`}>
             <div className="row no-gutters">
                 <div className="col-4 d-flex align-items-center justify-content-center">
                     <img src={image} class="card-img" alt={name} />
                 </div>
                 <div className="col-6">
                     <div className="card-body">
                         <h5 className={`card-title ${styles.cardName}`}>{name}</h5>
                             <p className="card-text">Gender: <b>{gender}</b></p>
                             <p className="card-text">Last Location: {location.name}</p>
                         <p className="card-text">Species: <b>{species}</b></p>
                     </div>
                 </div>
                 <div className={`col-2 d-flex align-items-start justify-content-center p-3`}>
                 <h6 className={`card-title ${styles.statusText} p-1 fs-6`}>{status}</h6>
                 </div>
             </div>
        </div>
        </div>
    )
}