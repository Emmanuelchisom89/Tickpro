const ProductDetailTables = ({ product }) => {
  return (
    <section className="more-about-listing">
      <h2>More About This Listing</h2>
      <div className="table-container">
        <table className="listing-table">
          <tbody>
            <tr>
              <td>
                <h3>Basic Info</h3>
              </td>
            </tr>
            <tr>
              <td>Brand:</td>
              <td>{product.basicInfo.brand}</td>
            </tr>
            <tr>
              <td>Reference Number:</td>
              <td>{product.basicInfo.referenceNumber}</td>
            </tr>
            <tr>
              <td>Model:</td>
              <td>{product.basicInfo.model}</td>
            </tr>
            <tr>
              <td>Movement:</td>
              <td>{product.basicInfo.movement}</td>
            </tr>
            <tr>
              <td>Case Material:</td>
              <td>{product.basicInfo.caseMaterial}</td>
            </tr>
            <tr>
              <td>Bracelet Material:</td>
              <td>{product.basicInfo.braceletMaterial}</td>
            </tr>
            <tr>
              <td>Year of Production:</td>
              <td>{product.basicInfo.year}</td>
            </tr>
            <tr>
              <td>Condition:</td>
              <td>{product.basicInfo.condition}</td>
            </tr>
            <tr>
              <td>Delivery Scope:</td>
              <td>{product.basicInfo.deliveryScope}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{product.basicInfo.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <table className="listing-table">
          <tbody>
            <tr>
              <td>
                <h3>Case</h3>
              </td>
            </tr>
            <tr>
              <td>Case material:</td>
              <td>{product.case.caseMaterial}</td>
            </tr>
            <tr>
              <td>Case diameter:</td>
              <td>{product.case.caseDiameter}</td>
            </tr>
            <tr>
              <td>Water resistance:</td>
              <td>{product.case.waterResistance}</td>
            </tr>
            <tr>
              <td>Dial:</td>
              <td>{product.case.dail}</td>
            </tr>
            <tr>
              <td>Dial Numerals:</td>
              <td>{product.case.dailNumerals}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <table className="listing-table">
          <tbody>
            <tr>
              <td>
                <h3>Strap</h3>
              </td>
            </tr>

            <tr>
              <td>Bracelet material:</td>
              <td>{product.strap.braceletMaterial}</td>
            </tr>
            <tr>
              <td>Bracelet color:</td>
              <td>{product.strap.braceletColor}</td>
            </tr>
            <tr>
              <td>Clasp:</td>
              <td>{product.strap.clasp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductDetailTables;
