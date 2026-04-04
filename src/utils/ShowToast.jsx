// ShowToast.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowToast = (message) => {
  toast.info(message || "Default message", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default ShowToast;
