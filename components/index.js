import useSWR, { useSWRConfig } from 'swr'
import CharacterCard from './characterCard';
import { useState } from 'react';
import styles from "../styles/Filters.module.css";

function Page({index, key}) {
    const [species, setSpecies] = useState([]);
    const [name, setName] = useState([])
    const [status, setStatus] = useState([])
    const [gender, setGender] = useState([])
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR(`https://rickandmortyapi.com/api/character?page=${index}&name=${name}${gender?gender.map((x)=>{return(`&gender=${x}`)}).join(""):""}${status?status.map((x)=>{return(`&status=${x}`)}).join(""):""}${species?species.map((x)=>{return(`&species=${x}`)}).join(""):""}`, fetcher);
    const speciesFilter = event => {
        let id  = event.currentTarget.id;  
        setSpecies(species => species.includes(id)? species.filter(x => x != id) : [id, ...species]);
    }
    const handleChange = event => {
        setName(event.target.value)
    } 
    const statusFilter = event => {
        let id  = event.currentTarget.id;  
        setStatus(status => status.includes(id)? status.filter(x => x != id) : [id, ...status])
      };
    
      const genderFilter = event => {
        let id  = event.currentTarget.id;  
        setGender(gender => gender.includes(id)? gender.filter(x => x != id) : [id, ...gender])
      }
    return(
        <div>
            <div className={`navbar ${styles.navbar}`}>
                <h1>The Rick & Morty</h1>
                <div class="">
                    <input type="text" class="form-control" placeholder="Find Character" onChange={handleChange} />
                    <i class="bi bi-search input-group-addon"></i>
                </div>
            </div>
            
            <div className={`container-fluid`}>
            <div className='row'>
                <div className={`row col-10 ${styles.mainBody}`}>
                    {error?<h3>Failed to loading.<br/>Error: {error}</h3>
                    :data?data.results.map((e,i)=>{
                        return(
                            <CharacterCard
                            key={i}
                            name={e.name}
                            gender={e.gender}
                           status={e.status}
                            image={e.image}
                            species={e.species}
                            location={e.location}
                          />
                        )
                    })
                    :<p>Loading... </p>}
                </div>
                <div className={`col-2 d-flex flex-column ${styles.filterSection}`}>
                <h6>Status</h6>
                <div className="d-flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" onClick={statusFilter} className="btn-check" name="status" id="dead" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="dead">Dead</label>  
                    <input type="checkbox" onClick={statusFilter} className="btn-check" name="status" id="alive" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="alive">Alive</label> 
                </div>
                <h6>Species</h6>
                <div className="d-flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    
                    <input type="checkbox" onClick={speciesFilter}  className="btn-check" name="species" id="human" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="human">Human</label>  
                    <input type="checkbox" onClick={speciesFilter}  className="btn-check" name="species" id="alien" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="alien">Alien</label> 
                    <input type="checkbox" onClick={speciesFilter} className="btn-check" name="species" id="humanoid" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="humanoid">Humanoid</label> 
                </div>
                <h6>Gender</h6>
                <div className="d-flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    
                    <input type="checkbox" onClick={genderFilter} className="btn-check" name="status" id="male" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="male">Male</label>  
                    <input type="checkbox" onClick={genderFilter}  className="btn-check" name="status" id="female" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="female">Female</label> 
                    <input type="checkbox" onClick={genderFilter}  className="btn-check" name="status" id="genderless" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="genderless">Genderless</label> 
                    <input type="checkbox" onClick={genderFilter}  className="btn-check" name="status" id="unknown" autocomplete="off"/>
                    <label className={`btn btn-outline-primary ${styles.buttun}`} for="unknown">Unknown</label> 
                </div>
             
                </div>  
            </div>

            </div>
        </div>
    )
}


export default Page;