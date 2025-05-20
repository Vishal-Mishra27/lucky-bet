
/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa"
import { ImFileText } from "react-icons/im"
import { IoMdNotifications, IoMdSettings } from "react-icons/io"

function NotificationModal({ setIsWalletModal }) {
    return (
      <div
        onMouseEnter={() => setIsWalletModal(true)}
        onMouseLeave={() => setIsWalletModal(false)}
        className="relative inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      >
        <div className="bg-bg3  mt-2 flex flex-col gap-0.5 absolute top-[48px] h-[15.4rem] overflow-y-auto hide-scrollbar right-1 w-[50px] shadow-2xl rounded-md">
          <div
            className="w-full flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4"
            style={{ transition: "background 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgb(225 225 225 / 85%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <IoMdNotifications size={22} />
          </div>

          <div className="w-full hover:bg-bg2 flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4">
            <FaRegStar size={22} />
          </div>
          <div className="w-full hover:bg-bg2 flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4">
            <IoMdSettings size={22} />
          </div>
          <div className="w-full hover:bg-bg2 flex justify-center py-5 rounded-[0.22rem] text-white hover:text-bg4">
            <ImFileText size={22} />
          </div>
        </div>
      </div>
    );
}

export default NotificationModal