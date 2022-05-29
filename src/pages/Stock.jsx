import { useParams } from "react-router-dom"

const Stock = (props) => {
 

  const {symbol} = useParams()


  const stock = props.stocks.find((stock) => stock.symbol === symbol)

  return (
        <div>
          <h1>{stock.name}</h1>
          <h1>{stock.symbol}</h1>
          <h1>{stock.lastPrice}</h1>
          
        </div>
    )
}

export default Stock