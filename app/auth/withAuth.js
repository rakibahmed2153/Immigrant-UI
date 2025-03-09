import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchWithToken } from '@/app/components/api/fetchData';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
          router.replace('/login');
          return;
        }

        try {
          await validateAccessToken(accessToken);
        } catch (error) {
          console.error('Access token validation failed', error);
          router.replace('/login');
        } finally {
          setLoading(false);
        }
      };

      checkAuth();
    }, []);

    const validateAccessToken = async (accessToken) => {
      try {
        const data = await fetchWithToken('login/validateAccessToken', accessToken, { /* optional params */ });
        console.log('Data:', data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        router.replace('/login');
      }
    };

    return (
      <Box minHeight="100vh">
        {loading ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography variant="h6" gutterBottom>
              Loading, please wait...
            </Typography>
            <CircularProgress />
          </Box>
        ) : (
          <WrappedComponent {...props} />
        )}
      </Box>
    );
  };

  return AuthComponent;
};

export default withAuth;
