import { useState } from "react";

function PetItem({ pet, adoptPet }) {

    const [isGifPlaying, setIsGifPlaying] = useState(false);

    const toggleGif = () => {
        setIsGifPlaying(!isGifPlaying);
    }

    return (
        <div className="col-lg-4 col-md-8 col-sm-10 my-3">
            <img
                style={{ height: '220px', width: '220px', objectFit: 'cover' }}
                className="img-fluid"
                alt={pet.name}
                src={isGifPlaying ? pet.image2 : pet.image}
            />
            <div className="content">
                <h3>{pet.name}</h3>
                <button
                    onClick={() => {
                        toggleGif()
                    }}
                    type="button" className="btn btn-info">
                    {!isGifPlaying && 'Pet'}
                    {isGifPlaying && 'Stop Petting'}
                </button>
                <button
                    onClick={() => {
                        adoptPet(pet);
                    }}
                    type="button"
                    className="btn btn-info m-2"
                >
                    Adopt
                </button>
            </div>
        </div>
    );
}

export default PetItem;