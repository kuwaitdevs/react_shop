import React, { useEffect, useState } from 'react'
import PetsList from './PetsList';
import petsData from "../pets_data";

function PetsHome() {
    // Available list changes based on adopted pets
    const [availablePetsList, setAvailablePetsList] = useState(petsData);

    // filtered is changed based on filters only
    const [filteredPetsList, setFilteredPetsList] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState("");


    const filterPets = () => {
        let filteredList = [];

        for (let i = 0; i < availablePetsList.length; i++) {
            const currentPet = availablePetsList[i];

            const petNameLower = currentPet.name.toLowerCase();
            const searchTermLower = searchText.toLowerCase();


            let nameMatch = false;
            let typeMatch = false;
            let adopted = currentPet.adopted;

            if (searchTermLower === "") {
                nameMatch = true;
            } else {
                nameMatch = petNameLower.includes(searchTermLower);
            }

            if (selectedType === "") {
                typeMatch = true;
            } else {
                typeMatch = currentPet.type === selectedType;
            }

            if (!adopted && (nameMatch && typeMatch)) {
                filteredList.push({ ...currentPet });
            }
        }

        setFilteredPetsList(filteredList);
    }

    const adoptPet = (petToAdopt) => {
        let availablePetsListNew = [...availablePetsList];

        for (let i = 0; i < availablePetsListNew.length; i++) {
            const currentPet = availablePetsList[i];

            if (petToAdopt.id === currentPet.id) {
                currentPet.adopted = true;
            }
        }

        setAvailablePetsList(availablePetsListNew);
    }


    useEffect(() => {
        filterPets();
    }, [searchText, selectedType, availablePetsList])


    return (
        <div className='text-center'>
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-7 col-xl-5">
                    <div className="section-title text-center mb-30">
                        <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                            Fur-ends
                        </h1>
                        <div className="input-group rounded">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                value={searchText}
                                onChange={(event) => {
                                    setSearchText(event.target.value);
                                }}
                            />
                        </div>
                        <br />
                        <label>Type:</label>
                        <select
                            onChange={(event) => {
                                setSelectedType(event.target.value);
                            }}
                            className="form-select"
                            defaultValue={selectedType}
                        >
                            <option value="" >
                                All
                            </option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Rabbit">Rabbit</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <PetsList adoptPet={adoptPet} petsData={filteredPetsList}></PetsList>
            </div>
        </div>
    )
}

export default PetsHome;