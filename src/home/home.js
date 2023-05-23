import './home.css';
import { useState } from 'react';

function Home(){
    const [obj, setObj] = useState({name: '奥特曼', age:12});
    // console.log('obj',obj);
    function setName(){
        let a = obj;
        a.age = 20;
        setObj(a);
    }
    return(
        <div>
            <h1 className="jkl">{obj.name}</h1>
            <h2 className='uzi'>{obj.age}</h2>
            <button onClick={setName}>点击</button>
        </div>
    )
}

export default Home