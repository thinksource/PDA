import newsurl from "../assets/svgs/news.svg";
const picturl="../assets/svgs/news.svg";
import './NewsItem.css';
const NewsItem=(props:{url:string, title: string, description: string, urlToImage: string})=>{
    const imgurl: string = props.urlToImage?props.urlToImage:picturl;
    return (
        <div className= "news-item">
            <div className = "news-picture">
                <img src={imgurl} className="news-img"></img>
            </div>
            <p><a href={props.url}>{props.title}</a></p>
            <div>{props.description}</div>
        </div>
    )
}

export default NewsItem;