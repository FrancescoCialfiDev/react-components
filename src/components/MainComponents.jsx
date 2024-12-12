import posts from "../data/post"


function Main() {

    const newArray = [...posts]
    const card = newArray.map((element) => {
        return (
            <div key={element.length} className="containerCard border rounded-4  bg-white mx-3">
                <img src={element.src} className="card-img-top rounded-top-4" alt="..." />
                <div className="card-body p-3 stile">
                    <h5 className="card-title">{element.titolo}</h5>
                    <p className="card-text">{element.testo}</p>
                    <a href="#" className="btn btn-warning text-white">Leggi di piu</a>
                </div>
            </div>
        )
    })


    return (

        < main >
            <div className=" d-flex justify-content-center dimension">
                {card}
            </div>
        </main >


    )

}

export default Main;