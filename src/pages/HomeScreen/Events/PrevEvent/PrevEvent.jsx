const PrevEvent = ({ item }) => {
    const { events_name, event_image } = item
    return (
        <div>
            <img src={event_image} alt="" />
            <h3 className="my-2 text-lg font-bold text-center uppercase border-l-4 border-indigo-500 bg-sky-100">{events_name}</h3>
        </div>
    );
};

export default PrevEvent;