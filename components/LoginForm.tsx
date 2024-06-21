

export default function LoginForm({handleSubmit}: {handleSubmit: () => void }){
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="flex-col flex-wrap">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="p-2 w-full my-5"
                    />
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="p-2 w-full my-5"
                    />
                    <button type="submit" className="bg-green-400 mt-5 rounded w-full p-3 font-bold">
                        Sign in
                    </button>
                </div>
            </form>
        </div>

    );
}