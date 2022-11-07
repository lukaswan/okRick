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
        <>
         <div>
            <input type="text" placeholder='Search' onChange={handleChange}></input>
            <button id="dead" onClick={statusFilter} className={status.includes("dead")?styles.isClicked:"blue"}>dead </button>
            <button id="alive" onClick={statusFilter} className={status.includes("alive")?styles.isClicked:"blue"}>alive</button>
            <button id="human" onClick={speciesFilter} className={species.includes("human")?styles.isClicked:"blue"}>human</button>
            <button id="alien" onClick={speciesFilter} className={species.includes("alien")?styles.isClicked:"blue"}>alien</button>
            <button id="humanoid" onClick={speciesFilter} className={species.includes("humanoid")?styles.isClicked:"blue"}>alienoid</button>
            <button id="male" onClick={genderFilter} className={gender.includes("male")?styles.isClicked:"blue"}>male</button>
            <button id="female" onClick={genderFilter} className={gender.includes("female")?styles.isClicked:"blue"}>female</button>
            <button id="genderless" onClick={genderFilter} className={gender.includes("genderless")?styles.isClicked:"blue"}>genderless</button>
            <button id="unknown" onClick={genderFilter} className={gender.includes("unknown")?styles.isClicked:"blue"}>unknown</button>

        </div>
         <div className='row'>
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
        </>
    )
}


export default Page;