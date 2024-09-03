import React from 'react'
import NoteList from '../NoteList'
import { useNavigate } from 'react-router-dom';


export default function WhyUs() {
    const navigate = useNavigate()
    return (
        <div className='container '>

            <div className='twins mt-12 gap-12 ' >

                {/* Featured notes */}
                <div className=' flex-1  mb-56 '>
                    <h1 className="font-bold text-4xl  mb-6 ">FEATURED NOTES</h1>
                    <div className='featured-notes w-full '>
                        <NoteList />
                    </div>
                    <div className='w-full text-right'>
                        <button className=' w-52' onClick={()=>navigate('/register')}>Get Started</button>
                    </div>

                </div>


                {/* why choose us */}
                <div className='flex flex-col justify-items-start flex-1  h-full  '>
                    <h1 className='font-bold text-4xl text-primary mb-6 text-center '>WHY US?</h1>
                    <CardGrid />
                </div>

            </div>
        </div>
    )
}

const CardGrid = () => {
    return (

        <div className="grid grid-cols-2 gap-2 p-4">
            <GridCardItem size="w-full h-full p-12 text-2xl" text="SIMPLE" />
            <GridCardItem size="w-4/5 h-5/6 p-10 text-2xl justify-self-start align-bottom" style='end' text="CLEAR" />
            <GridCardItem size="w-5/6 h-5/6 p-10 text-2xl justify-self-end align-top " text="COMPLETE" style='start' />
            <GridCardItem size="w-3/6 h-3/6 p-10 text-2xl align-center" style='start' text="NEAT" />

            {/* <div className="w-full h-full bg-blue-500 p-12 text-center align-middle">ONe</div>
            <div className="w-3/4 h-3/4 bg-red-500  p-12 text-center " style={{alignSelf:"center"}}>
                <h1>ONe</h1>
            </div>
            <div className="w-1/2 h-1/2 bg-green-500">ONe</div>
            <div className="w-1/4 h-1/4 bg-yellow-500">ONe</div> */}


        </div>


    );
};


const GridCardItem = ({ size, text, style = "" }) => {

    return (
        <div className={`${size} bg-primary text-center 
                            flex align-middle justify-center 
                            rounded-2xl`}
            style={{ alignSelf: style ? style : "center", }}>
            <p>{text}</p>
        </div>
    )

}

// <div className="grid grid-cols-2 gap-6">
//     <GridCardItem text="SIMPLE" />
//     <GridCardItem text="CLEAR" />
//     <GridCardItem text="COMPLETE" />
//     <GridCardItem text="WHY NOT?" />

// </div>

// <div className="grid grid-cols-2 gap-6">
//     <GridCardItem text="SIMPLE" />
//     <GridCardItem text="CLEAR" />
//     <GridCardItem text="COMPLETE" />
//     <GridCardItem text="WHY NOT?" />

// </div>