import SignupForm from "../components/SignupForm";
import Nav from "../components/Nav";

export default function Signup(){
    return(
        <div className="signup-page bg-green-200">
            <Nav />
            <div className="mx-auto content-center h-screen w-1/2">
                <h1 className="text-center text-3xl font-bold mb-5">Get started with your account!</h1>
                <p className="text-left mb-10">
                    Find and create new recipes. Reduce food waste. Save money on ingredients.
                    Do it all with the help of Wasteless Kitchen! Already have an account? Log in
                </p>
                <SignupForm />
            </div>
        </div>

    );
}