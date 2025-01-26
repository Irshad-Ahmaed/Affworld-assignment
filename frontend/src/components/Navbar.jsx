import { useNavigate } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import useAuthStore from "../stores/authStore";

const Navbar = () => {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate()

  const navigateToLogin = ()=>{
    navigate('/login');
  }

  const navigateToFeeds = ()=>{
    navigate('/feed');
  }
  return (
    <header className="bg-gray-300 shadow-md w-full z-40">
      <div className="container mx-auto px-4 h-12">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Task Manager</h1>
            
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex gap-5 items-center justify-between">

                <div 
                onClick={navigateToFeeds}
                className="flex gap-1 items-center cursor-pointer text-orange-500 hover:font-semibold hover:translate-y-0.5 transition-all">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Feeds</span>
                </div>

                <div className="flex gap-1 items-center">
                  <User className="size-5 text-blue-500" />
                  <span className="hidden text-blue-500 sm:inline">{user?.name}</span>
                </div>
                

                <button className="flex gap-2 ml-2 items-center cursor-pointer" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>)
              :
              <span onClick={navigateToLogin} className="font-semibold hover:underline cursor-pointer">Login</span>
            }
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;