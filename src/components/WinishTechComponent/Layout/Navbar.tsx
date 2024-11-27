import logo from "../../../assets/LogoWinishTech.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface NavData {
  name: string;
  isIcon: boolean;
}
function Navbar() {
  const navData: NavData[] = [
    {
      name: "New Lead",
      isIcon: true,
    },
    {
      name: "SAAS Model",
      isIcon: true,
    },
    {
      name: "Payroll",
      isIcon: true,
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 mt-5 px-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex gap-6  ml-32 h-[40px]">
          {navData.map((elm) => (
            <li>{elm.name} {elm.isIcon && <KeyboardArrowDownIcon className="text-secondary"/>}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
