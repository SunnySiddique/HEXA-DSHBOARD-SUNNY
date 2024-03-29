import { Popover } from "antd";
import { useState } from "react";
import NotificationPopoverContent from "./NotificationPopoverContent";

const Notification = () => {
  const [popovers, setPopovers] = useState(false);
  //   const hide = () => {
  //     setPopover(false);
  //   };

  const handleOpenChanges = (newOpen) => {
    setPopovers(newOpen);
  };
  return (
    <div className="main-pop">
      <Popover
        content={<NotificationPopoverContent />}
        trigger="click"
        open={popovers}
        onOpenChange={handleOpenChanges}
        placement="bottomRight"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.041"
            height="20.001"
            viewBox="0 0 16.041 20.001"
            className="injected-svg"
            data-src="/hexadash-react/static/media/bell.aa4f9e252e677264ac339a59247c47f5.svg"
            //   xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="bell-17"
              d="M18.035,13.208V10.02A6.015,6.015,0,0,0,13.023,4.1V3a1,1,0,1,0-2.005,0V4.1A6.015,6.015,0,0,0,6.005,10.02v3.188A3.008,3.008,0,0,0,4,16.035V18.04a1,1,0,0,0,1,1H8.15a4.01,4.01,0,0,0,7.74,0h3.148a1,1,0,0,0,1-1V16.035a3.008,3.008,0,0,0-2.005-2.827ZM8.01,10.02a4.01,4.01,0,0,1,8.02,0v3.008H8.01Zm4.01,10.025a2.005,2.005,0,0,1-1.724-1h3.449A2.005,2.005,0,0,1,12.02,20.046Zm6.015-3.008H6.005v-1a1,1,0,0,1,1-1H17.033a1,1,0,0,1,1,1Z"
              transform="translate(-4 -2)"
              fill="#a0a0a0"
            ></path>
          </svg>
        </span>
      </Popover>
    </div>
  );
};

export default Notification;
