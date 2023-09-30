const Birthday = ({item}) => {
    const { name, birthdayDate } = item
    console.log(name);

    return (
        <div className="flex justify-center mx-auto my-5">
            <label htmlFor="my_modal_7" className="btn btn-outline btn-success">Today Birthday {birthdayDate}</label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="shadow-xl card card-compact bg-base-100">
                        <img src="https://i.ibb.co/vhnkHgh/birthday.jpg" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="mx-auto card-title">{name}</h2>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default Birthday;