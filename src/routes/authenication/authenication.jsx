import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import './authenication.scss';

const Authenication = () => {
    return (
        <div className='authenication-container'>
             <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authenication;