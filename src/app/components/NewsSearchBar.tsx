import React from "react";

const NewsSearchBar: React.FC = () => {
    return (
        <>
            <div className="box-border h-auto w-auto p-4 border">
                <div className="flex">
                    <div className="flex-initial w-32 h-14">
                    Date : 
                    </div>
                    <div className="flex-initial w-64 h-14">
                    <input type="date" name="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-initial w-32 h-14">
                    Search : 
                    </div>
                    <div className="flex-initial w-64 h-14">
                    <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-initial w-32 h-14">
                    Sort By : 
                    </div>
                    <div className="flex-initial w-64 h-14">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Choose Sort By</option>
                        <option value="relevancy">Relevancy</option>
                        <option value="popularity">Popularity</option>
                        <option value="publishedAt">Published At</option>
                    </select>
                    </div>
                </div>
                <div className="flex">
                    <button className="bg-transparent-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Reset</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">Search</button>
                </div>
                </div>
        </>
    )
}

export default NewsSearchBar