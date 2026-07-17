import "./Card.css"
import { useState } from "react";
export default function Card(){
      const [liked, setLiked] = useState(false);
    return(
        <> 
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglYmvgyqB5pH5ZZgoWBokp7Q8sjyOacQK0Xe95uWdgw&s=10" alt="Nature"/>
                <h2>Nature Post</h2>
                <button onClick={() => setLiked(!liked)}>{liked ? "❤️ Unlike" : "🩷 Like"}</button>
            </div>
        </>
    );

}
