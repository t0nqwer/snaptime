import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className=" flex flex-1 justify-center items-center flex-col py-10">
            {/* <div className="flex flex-col items-center justify-center h-full"> */}
            <Outlet />
            {/* </div> */}
          </section>
          <img
            src="/public/assets/images/side-img.svg"
            alt="logo"
            className=" hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
