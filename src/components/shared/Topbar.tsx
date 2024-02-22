import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import { useSignOut } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOut();
  const { user } = useUserContext();
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);
  return (
    <section className="topbar">
      <div className="px-5 py-4 flex-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              width={20}
              height={20}
            />
          </Button>
          <Link to={`/Profile/${user.id}`} className="gap-3 flex-center">
            <img
              src={user.imageUrl || "/assets/images/profile.png"}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
