import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { signIn, googleSignIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.name, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

                navigate('/');
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

        navigate(from, { replace: true });
        navigate('/')
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
            alert('Captcha Matched');
        }
        else {
            setDisabled(true)
            alert('Captcha Does Not Match');
        }
    }

    return (
        <div className="mx-auto mt-5 shadow-xl md:w-1/2 card w-96 bg-base-100">
            <figure><img src="https://i.ibb.co/6y9DHb8/3d-modern-plexus-design-network-communications-modern-techno.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Login to your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Password
                            </span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input type="text" ref={captchaRef} name="captcha" placeholder="Type the text above" className="input input-bordered" />
                        <button onClick={handleValidateCaptcha} className='mt-2 btn btn-outline btn-xs'>Validate</button>
                    </div>
                    <div className="mt-6 form-control">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>

                <div className="divider">OR</div>

                <div className='mx-auto my-5'>
                    <button onClick={handleGoogleSignIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Continue with Goggle</button>
                </div>

                <p><small>New Here? <Link to="/signUp">Create an account</Link> </small></p>
            </div>
        </div>
    );
};

export default Login;