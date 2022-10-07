const CharactersCard = ({character}) => {
    return (

        <div className="card">
            <img className="card-img" src={character.img} alt={character.name} />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                    {character.nickname}<br/>
                    {character.birthday}<br/>
                    {character.better_call_saul_appearance.length !== 0 ? 'In BCS' : 'Not In BCS'}<br/>
                </p>
            </div>
        </div>


    )
}

export default CharactersCard