import "./orderProcess.css";
const OrderProcess = () => {
  return (
    <div className="order-process">
      <div className="row align-items-center">
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="order-process-item">
            <span>1</span>
            <div className="order-process-details">
              <h5>Your order</h5>
              <p>Add product to your cart, enter your details and confirm.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="order-process-item">
            <span>2</span>
            <div className="order-process-details">
              <h5>Picking Your order</h5>
              <p>
                Your order is being picked and now will be forwarded for
                packaging.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="order-process-item">
            <span>3</span>
            <div className="order-process-details">
              <h5>Packing Your Order</h5>
              <p>
                We are packing your order and will be out for delivery soon.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="order-process-item">
            <span>4</span>
            <div className="order-process-details">
              <h5>Deliver</h5>
              <p>
                Your order has been prepared and out for delivery. It will be
                delivered soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
