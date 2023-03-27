
import axios from "axios";
import React ,{useState}from "react";
import './App.css';
import SearchField from "./component/search";



const baseURL = "https://jsonplaceholder.typicode.com/posts";


export default function App() {
  const [post, setPost]: any = React.useState(null);
const [searchQuery,setSearchQuery] = useState('')
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  const filteredData = post.filter((item:any) =>
    item.title
    .toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div>
    <SearchField value={searchQuery}setValue={setSearchQuery}/>

      <div className="gridcontainer">
        {filteredData.map((a: any) => <>
          <div style={{ margin: 0, borderRadius: '1rem' ,width: '18rem', height: '15rem', backgroundColor: '#eeeeee' }}>
          <div className='pageNo'>{a.id}</div>
            <h1 style={{ margin: '10px' }} >{a.title.substring(0, 20)}</h1>
            <p style={{ margin: '10px' }} >{a.body}</p>
          </div>
        </>)}
      </div>
    </div>
  );
}


