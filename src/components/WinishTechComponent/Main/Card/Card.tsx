import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
function Card({data}) {
  return (
    <div className="border-[3px] border-secondary rounded-2xl h-[max-content] p-4 shadow-bottom ">
      <div className="flex items-center">
        <div className="flex-1 flex items-center gap-2 ">
          <h1 className="text-2xl font-bold text-[#003366]">East Auto</h1>{" "}
          <button className="border-[2px] border-secondary rounded-full text-[12px] w-[50px] h-[25px] ">
            New
          </button>
        </div>{" "}
        <div className="flex text-secondary  mr-[-7px]">
          <BookmarkBorderOutlinedIcon />
          <MoreVertIcon />
        </div>
      </div>
      <h1 className="text-xl font-semibold mt-2">Patrick</h1>
      <div className="flex justify-between mt-2">
        <p>+18323314168</p>
        <p>77018</p>
      </div>
      <div className="flex justify-between ">
        <p>21-Oct -24</p>
        <p>09:45 PM</p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex text-secondary items-end gap-4 ">
          <PhoneIcon />
          <MessageIcon />
          <p><SendIcon className="rotate-[-45deg] -mt-[12px]" /></p>
          
        </div>
        <h1 className="text-xl font-bold text-[#003366]">#Notes</h1>{" "}
      </div>
    </div>
  );
}

export default Card;
