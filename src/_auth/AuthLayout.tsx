import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col items-center justify-center flex-1 py-10 ">
            {/* <div className="flex flex-col items-center justify-center h-full"> */}
            <Outlet />
            {/* </div> */}
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden object-cover w-1/2 h-screen bg-no-repeat  xl:block"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
