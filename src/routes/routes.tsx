import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { useAuth } from 'modules/auth/context';
import { Auth, Home } from 'pages';
import { getSessionReset, getSessionVerification } from 'services/store';

import AuthProtected from './auth-protected';

const Routes = () => {
	const { user } = useAuth();

	const verification = getSessionVerification().email;
	const reset = getSessionReset().email;

	return (
		<Switch>
			<Route path="" element={<Home.Home />} />
			<Route path="product/:productId" element={<Home.SingleProduct />} />
			<Route path="korzinka" element={<Home.Korzinka />} />

			<Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/" />}>
				<Route path="login" element={<Auth.Login />} />
				<Route path="register" element={verification ? <Auth.Register /> : <Navigate to="/auth/verification" />} />

				<Route path="*" index element={<Navigate to="/auth/login" />} />
			</Route>

			<Route path="*" element={<Navigate to={user ? '/' : '/auth/login'} />} />
		</Switch>
	);
};

export default Routes;
