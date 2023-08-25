const PrevEvent = ({ item }) => {
    const { events_name, event_image } = item
    return (
        <div>
            <img src={event_image} alt="" />
            <h3 className="uppercase text-center font-bold text-lg border-l-4 border-indigo-500 my-2 bg-sky-100">{events_name}</h3>
        </div>
    );
};

export default PrevEvent;