import React, {useState} from "react";
import SearchNewsEntity from '../../domains/entities/SearchNewsEntity';

interface resetComponent {
    reset: (data: SearchNewsEntity) => void;
    search: (data: SearchNewsEntity) => void;
}
const NewsSearchBar: React.FC<resetComponent> = ({reset, search}) => {
    const [date, setDate] = useState("");
    const [q, setQ] = useState("");
    const [sortBy, setSortBy] = useState("");

    const resetToParent = () => {
        const data:SearchNewsEntity = {
            search: '',
            date: '',
            sortBy: '',
        }
        reset(data);
      };
    const searchToParent = () => {
        const data:SearchNewsEntity = {
            search: q,
            date: date,
            sortBy: sortBy,
        }
        search(data)
    }
    return (
        <>
            <div className="box-border h-auto w-auto p-4 border">
                <div className="flex">
                    <div className="flex-initial w-32 h-14">
                    Date : 
                    </div>
                    <div className="flex-initial w-64 h-14">
                    <input type="date" name="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={date} onInput={ (e:any) => setDate(e.target?.value)} />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-initial w-32 h-14">
                    Search : 
                    </div>
                    <div className="flex-initial w-64 h-14">
                    <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    value={q} onInput={ (e:any) => setQ(e.target?.value)}/>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-initial w-32 h-14">
                    Sort By : 
                    </div>
                    <div className="flex-initial w-64 h-14">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={ (e:any) => {
                        const selectSortBy = e.target?.value
                        setSortBy(selectSortBy)
                    }}>
                        <option>Choose Sort By</option>
                        <option value="relevancy">Relevancy</option>
                        <option value="popularity">Popularity</option>
                        <option value="publishedAt">Published At</option>
                    </select>
                    </div>
                </div>
                <div className="flex">
                    <button className="bg-transparent-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>resetToParent()}>Reset</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto" onClick={() => searchToParent()}>Search</button>
                </div>
                </div>
        </>
    )
}

export default NewsSearchBar