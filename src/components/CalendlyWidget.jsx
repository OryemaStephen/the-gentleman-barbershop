import image from "../assets/slider02.jpg";

const Reservation = () => {
    return (
        <div className="relative w-full h-[80vh] md:pt-[65px] pt-[50px]">
            <div
                className="w-full h-full bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            ></div>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-4 text-white">
                <div className="text-center">
                    <a 
                        href="https://calendly.com/oryemasteve9/30min" 
                        target="_blank"
                        className="inline-block px-6 py-3 text-lg font-medium text-black bg-white rounded hover:bg-slate-400 hover:text-white"
                    >
                        Make Appointment
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
