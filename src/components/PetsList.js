import PetItem from "./PetItem";

function PetsList(props) {
    const petList = props.petsData.map((pet) => <PetItem adoptPet={props.adoptPet} pet={pet} key={pet.id} />);

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">{petList}</div>
            </div>
        </section>
    );
}

export default PetsList;