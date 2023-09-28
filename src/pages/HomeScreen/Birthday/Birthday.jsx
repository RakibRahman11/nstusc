const Birthday = () => {
    const date = new Date();
    const today = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

    return (
        <div className="flex justify-center mx-auto my-5">
            <label htmlFor="my_modal_7" className="btn btn-outline btn-success">Today Birthday {today}</label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <img src="https://i.ibb.co/vhnkHgh/birthday.jpg" alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title mx-auto">SUNANDA DEWAN</h2>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default Birthday;