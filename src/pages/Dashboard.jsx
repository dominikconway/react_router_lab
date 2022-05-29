import { Link } from "react-router-dom"

const Dashboard = (props) => {
    return props.stocks.map((stock) => <Link to={`/stocks/${stock.symbol}`}><h1>{stock.name}</h1></Link>)
       
        
    
}

export default Dashboard