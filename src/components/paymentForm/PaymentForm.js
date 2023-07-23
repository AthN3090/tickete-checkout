import Input from "../input/Input";
import creditCard from "./CreditCard.svg"
import radioButton from "./Radio Button.svg"
import shield from "./ShieldCheckered.svg"
import ticket from "./Ticket.svg"
import calendar from "./CalendarBlank.svg"
import clock from "./Clock.svg"
import purchasePreview from "./preview.jpeg"
import tag from "./Tag.svg"
import "./PaymentForm.css"
function PaymentForm() {
    return (
      // form container
      <div className="payment-form-wrapper">
        <div className="payment-form-title">Confirm and Pay</div>
        <div className="payment-form-container">
          {/* left part of form */}
          <div className="payment-form">
            {/* Enter your detaills */}
            <div className="payment-form-section">
              <div className="payment-section-header">
                <span>Enter your details</span>
                <span>
                  We'll be sending your tickets to the details below. Booking
                  for a friend? Add their details.
                </span>
              </div>

              <div className="payment-section-input-grid">
                <Input
                  type="text"
                  placeholder="Full name"
                  errorMessage="Enter valid Full name"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  errorMessage="Invalid Phone Number"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  errorMessage="Enter Valid Email"
                />
                <Input
                  type="email"
                  placeholder="Confirm Email"
                  errorMessage="Enter Valid Email"
                />
              </div>
            </div>
            <div className="payment-form-section">
              <div className="payment-section-header">
                <span>Additional Information</span>
                <span>
                  We need a few more details to complete your reservation.
                </span>
              </div>

              <div className="payment-section-input-grid">
                <Input
                  type="text"
                  placeholder="Full name"
                  errorMessage="Enter valid Full name"
                />
                <Input
                  type="tel"
                  placeholder="Dropdown"
                  errorMessage="Invalid Phone Number"
                />
              </div>
            </div>
            <div className="payment-form-section">
              <div className="payment-section-header">
                <span>Select your mode of payment</span>
                <span>Payments with Tickete are secure and encrypted.</span>
              </div>
              <div className="payment-section-card-wrapper">
                <div className="payment-section-card-option">
                  <div>
                    <img src={creditCard} alt="credit card logo" /> Credit &
                    debit card
                  </div>

                  <img src={radioButton} alt="radio button logo" />
                </div>
                <div className="payment-section-card-details">
                  <Input
                    type="text"
                    placeholder="Name On Card"
                  />
                  <Input
                    type="number"
                    placeholder="Card Number"
                    
                  />
                  <Input
                    type="number"
                    placeholder="Expiry Date"
                    
                  />
                  <Input
                    type="password"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div className="payment-section-price-wrapper">
                <div className="payment-section-price-total">
                  <span>Total: $16.00</span>
                  <span>you will pay in USD</span>
                </div>
                <div className="payment-section-email-subscription">
                  <img src={radioButton} alt="radio botton logo" />
                  <span>
                    Receive travel tips, suggestions and offers in city by email
                  </span>
                </div>
                <div className="payment-section-button-wrapper">
                  <span>
                    With payment, you agree to the general{" "}
                    <span style={{ color: "#1733B6" }}>
                      terms and conditions of Tickete
                    </span>{" "}
                    & the{" "}
                    <span style={{ color: "#1733B6" }}>activity provider.</span>
                  </span>
                  <button>
                    Confirm and pay
                    <img src={shield} alt="payment secure logo" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right part of form */}
          <div className="payment-details-wrapper">
            <div className="payment-details-purchase">
              <img src={purchasePreview} alt="preview of purchase" />
              <div className="payment-details-purchase-info">
                <span>
                  Amsterdam opeg boat canal cruise - Live Ggide - from Anne
                  Frgnk House
                </span>

                <div className="payment-details-purchase-description">
                  <div className="description-item">
                    <img src={ticket} alt="ticket logo" />
                    <span>Amsterdam ticket</span>
                  </div>
                  <div className="description-item">
                    <img src={calendar} alt="ticket logo" />
                    <span> Mon, 22nd July, 2023</span>
                  </div>
                  <div className="description-item">
                    <img src={clock} alt="ticket logo" />
                    <span>12:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket-overview-wrapper">
              <div className="ticket-overview-wrapper-title">
                Tickets overview
              </div>
              <div className="ticket-price-calculation">
                <div className="price-item">
                  <span>Pax Type</span>
                  <span>$14</span>
                </div>
                <div className="price-item">
                  <span>Pax Type</span>
                  <span>$14</span>
                </div>
                <div className="price-item">
                  <span>Fee</span>
                  <span>$14</span>
                </div>
                <div className="price-discount-item">
                  <span>Fee</span>
                  <span>- $14</span>
                </div>
              </div>
              <div className="ticket-promo">
                <img src={tag} alt="promo logo" />
                <span>Have a promo code?</span>
              </div>
              <div className="ticket-final-price">
                <div className="price-item">
                  <div>
                    <span>Total</span>
                    <span>$16.00</span>
                  </div>
                  <span>
                  You will pay in USD
                  </span>
                </div>
                <div className="cancellation-detail">
                  <span>Free cancellation</span>
                  <span>Cancel before 30th July, 2023 for a full refund</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PaymentForm;