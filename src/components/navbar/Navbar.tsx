import {
  Bell,
  Menu,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NAV_ITEMS } from "../../constants/data";


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#555a75] rounded-xl px-4 py-2 text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => navigate("/")}
        >
          <img
            src="/Vector.svg"
            alt="EasyGo"
            className="w-[140px] md:w-[171px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavItem
                key={item.label}
                icon={<Icon size={18} />}
                label={item.label}
                active={isActive}
                onClick={() => navigate(item.path)}
              />
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Bell className="hidden md:block" />
          <button
            className=""
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>


        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-[#4a4f6d] rounded-lg p-4 space-y-4">
          {NAV_ITEMS?.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 cursor-pointer ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center gap-1 cursor-pointer transition ${
      active ? "text-white" : "text-white/70 hover:text-white"
    }`}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </div>
);

export default Navbar;
