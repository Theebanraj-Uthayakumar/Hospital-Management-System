import React from "react"
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap"
import { Link } from "react-router-dom"

const LatestTranaction = () => {
  const transactions = [
    {
      id: "customCheck2",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      Date: "07 Oct, 2019",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      Date: "07 Oct, 2019",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck4",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      Date: "06 Oct, 2019",
      total: "$384",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck5",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      Date: "05 Oct, 2019",
      total: "$412",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck6",
      orderId: "#SK2544",
      billingName: "Ronald Taylor",
      Date: "04 Oct, 2019",
      total: "$404",
      badgeClass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
  ]

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Latest Transaction</CardTitle>
          <div className="table-responsive">
            <table className="table align-middle table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "20px" }}>
                    <div className="form-check font-size-16 align-middle">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck1"
                      >
                        &nbsp;
                      </label>
                    </div>
                  </th>
                  <th className="align-middle">Order ID</th>
                  <th className="align-middle">Billing Name</th>
                  <th className="align-middle">Date</th>
                  <th className="align-middle">Total</th>
                  <th className="align-middle">Payment Status</th>
                  <th className="align-middle">Payment Method</th>
                  <th className="align-middle">View Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, key) => (
                  <tr key={"_tr_" + key}>
                    <td>
                      <div className="form-check font-size-16">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={transaction.id}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={transaction.id}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <Link to="#" className="text-body fw-bold">
                        {" "}
                        {transaction.orderId}{" "}
                      </Link>{" "}
                    </td>
                    <td>{transaction.billingName}</td>
                    <td>{transaction.Date}</td>
                    <td>{transaction.total}</td>
                    <td>
                      <Badge
                        className={
                          "font-size-11 badge-soft-" + transaction.badgeClass
                        }
                        color={transaction.badgeClass}
                        pill
                      >
                        {transaction.paymentStatus}
                      </Badge>
                    </td>
                    <td>
                      <i
                        className={"fab " + transaction.methodIcon + " me-1"}
                      ></i>{" "}
                      {transaction.paymentMethod}
                    </td>
                    <td>
                      <Button
                        type="button"
                        color="primary"
                        size="sm"
                        className="btn-rounded waves-effect waves-light"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default LatestTranaction
