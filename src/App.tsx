
function App() {

  return (
    <>
    {/* -1- Begin of New product's view */}
    <div style={{display: "hidden"}}>
    <h1>Nouveau produit</h1>
      <form style={{display: "flex", flexDirection: "column"}}>
        <div>
          <label htmlFor="productName">Product name :</label>
          <input id="productName" style={{width:500, marginLeft: 20, marginBottom: 15}} type="text" placeholder="Apple"></input>
        </div>

        <div>
          <label htmlFor="productCategory">Product category :</label>
          <input id="productCategory" style={{width:500, marginLeft: 20, marginBottom: 15}} type="text" placeholder="Apple"></input>
        </div>

        <div style={{display: "flex", textAlign: "center"}}>
          <label htmlFor="productDescription">Product description :</label>
          <textarea cols={50} rows={10} id="productDescription" style={{ width:500, marginLeft: 20, marginBottom: 15}}  placeholder="Apple"></textarea>
        </div>

        <div>
          <label htmlFor="productPrice">Product price :</label>
          <input id="productPrice" style={{width:500, marginLeft: 20, marginBottom: 15}} type="text" placeholder="Apple"></input>
        </div>
       
        <input type="button" value="Add"></input>
      </form>
    </div>

    {/* End of New product's view */}

    {/* -2- Begin of Product's list view */}
    <div style={{display: "visible"}}>
    <h1>Product's list</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td>Fruit</td>
            <td>$2</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Kebab</td>
            <td>Sandwich</td>
            <td>$5</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Coca Cola</td>
            <td>Drink</td>
            <td>$1.5</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Begin of Product's list view */}

    
    </>
  )
}

export default App
