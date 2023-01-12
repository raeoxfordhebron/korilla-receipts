import './App.css';
import receipts from "./receiptData"
import {useState} from "react"

function App() {
  const [receipt, setReceipt] = useState(receipts)
  return (<>
    <div className="App">
      <h1>Korilla Receipts</h1>
      {receipts.map((receipt) => {
        return (
          <div className="receipt">
        <h2>{receipt.person}</h2>
        <h3>{receipt.order.main}</h3>
        <article key={receipt.id}>
          <div>Protein: {receipt.order.protein}</div>
          <div>Rice: {receipt.order.rice}</div>
          <div>Sauce: {receipt.order.sauce}</div>
          <div>Drink: {receipt.order.drink}</div>
          <div>Cost: {receipt.order.cost}</div>
          <div>Paid: </div>
        </article>
        </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
