import LoginForm from "../../components/LoginForm";
import Nav from "../../components/Nav";
import Link from "next/link";

export default function Login(){

    return(
        <div className="signup-page bg-green-200">
            <Nav />
            <div className="mx-auto content-center h-screen w-1/2">
                <h1 className="text-center text-3xl font-bold mb-5">Sign in</h1>
                <LoginForm />
                <div className="other-options flex justify-between pt-5">
                    <div className="remember">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember"> &nbsp; Remember me</label>
                    </div>
                    <div className="forgot">
                        <Link href={'/'}>
                            Forgot Password?
                        </Link>
                    </div>
                </div>
                <div className="m-5 w-full flex mx-auto text-black">
                    <hr className="self-center w-3/5 border-black"/>
                        <p className="mx-3">or</p>
                    <hr className="self-center w-3/5 border-black"/>
                </div>
                <div className="oauth-login">
                    <div className="twitter flex justify-center bg-white rounded p-3 my-3 border border-black">
                        <p>Sign in with Twitter</p>
                    </div>
                    <div className="google flex justify-center bg-white rounded p-3 my-3 border border-black">
                        <p>Sign in with Google</p>
                    </div>
                    <div className="github flex justify-center bg-white rounded p-3 my-3 border border-black">
                        <p>Sign in with GitHub</p>
                    </div>
                    <div className="apple flex justify-center bg-white rounded p-3 my-3 border border-black">
                        <p>Sign in with Apple</p>
                    </div>
                </div>
            </div>
        </div>
    );
}