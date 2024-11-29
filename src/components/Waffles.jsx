import { useEffect, useState } from "react";
import Waffle from "./Waffle";


const Waffles = () => {
    const [waffles, setWaffles] = useState([])
    useEffect(() => {
        fetch('/waffle.json')
            .then(res => res.json())
            .then(data => setWaffles(data))
    }, [])
    return (
        <div className="my-5">
            <div className="md:flex items-center justify-center my-7 ">
                <h2 className="md:text-4xl text-2xl text-center  w-[300px] mx-auto md:w-full md:mx-0 font-bold text-orange-600 font-protest"> Welcome to Waffle Zone - Where Delicious Meets Crispy</h2>
            </div>
            <div className="md:grid grid-cols-3 mx-auto gap-3 space-y-3">
                {
                    waffles.map(waffle => <Waffle key={waffle.id} waffle={waffle}></Waffle>)
                }
            </div>

        </div>
    );
};

export default Waffles; 