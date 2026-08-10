"use client";


type Props = {
    id: number;
    name: string;

}

import { useState } from "react";

function Card({users}: {users: Props[]}) {
   const [search, setSearch] = useState("");
   const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <input className="border-2" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />  
            <h1>{filteredUsers.map((user)=>{
                return(
                    <div key={user.id}>
                        {user.name}
                    </div>
                )
            })}</h1>
        </div>
    );
}

export default Card;