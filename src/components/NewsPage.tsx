import { useState } from "react";
import axios from 'axios';
import NewsItem from "./NewsItem";
import "./NewsPage.css"
interface NewsItemData{
    title: string,
    url: string,
    description: string,
    urlToImage: string,
    source: {
        id: number,
        name: string
    }
}

interface APIError {
    status: string,
    code: string,
    message: string,   
}

const NewsPage=()=>{
    const [inputValue, setInput] = useState("");
    const maxdate  = new Date().toISOString().split("T")[0];
    const [beginDate, setBeginDate] = useState("");
    const [error, setError] = useState<APIError>({} as APIError);
    // const [country, setCountry] = useState("us");
    
    const [news, setNews] = useState<NewsItemData[]>([]);
    const apikey = "28bb598dea65419f85c9c13330b4f0a7";

    const searchNews=()=>{
        setError({} as APIError);
        let searchapi=`https://newsapi.org/v2/everything?apiKey=${apikey}`;
        if (inputValue.length > 0) {
            searchapi=searchapi+`&q=${inputValue}`;
        }
        if (beginDate.length > 0) {
            searchapi=searchapi+`&from=${beginDate}`
        }
        console.log(searchapi);
        axios.get(searchapi)
            .then((res)=>{setNews(res.data.articles);})
            .catch((error)=>{
                setError(error.response.data);
                console.log(error);});
    }
    return (
        <div>
        <div>
            News from: &nbsp;
            <input type="date" onChange={(e)=>setBeginDate(e.target.value)} max={maxdate}></input>
            <input type="text" placeholder="the key words or category" value={inputValue} onChange={(e)=>setInput(e.target.value)}/>
            
            <button onClick={searchNews}>Search</button>
        </div>
        {error.message && <div className="error_message">{error.message}</div>}
        <div>
        {news.map((newsItem, index)=>{
            return <NewsItem key={index} url={newsItem.url} title={newsItem.title} description={newsItem.description} urlToImage={newsItem.urlToImage}></NewsItem>
        })}
        </div>
        </div>
    )
}

export default NewsPage;