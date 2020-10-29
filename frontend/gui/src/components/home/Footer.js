import React from "react"

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="text-center">
          <span className="text-black">
            Built with
            <span
              className="text-red-600"
              style={{ padding: "0.25rem" }}
              aria-label="love"
              role="img"
            >
              ❤️ by
            </span>
          </span>
          <a
            href="https://github.com/Mratashnejad/Extra"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-500 font-bold ml-1"
          >
            Mr.Atashnejad | <i className="fab fa-github"> Vivaro Dealer Service</i>
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .footer {
            display: flex;
            justify-content: center;
            background: #001529;
            text-align: center;
            color: #fff;
            padding: 1rem;
          }
        `}
      </style>
      </div>
  )
}

export default Footer